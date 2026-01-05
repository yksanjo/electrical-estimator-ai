import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createClient } from '@supabase/supabase-js'
import Stripe from 'stripe'

// Need service role key for webhook to update user data
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        const userId = session.metadata?.supabase_user_id
        const tier = session.metadata?.subscription_tier

        if (userId && session.subscription) {
          await supabaseAdmin.from('profiles').update({
            subscription_status: 'active',
            subscription_tier: tier,
          }).eq('id', userId)
        }
        break
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription
        const customer = await stripe.customers.retrieve(subscription.customer as string)

        if ('metadata' in customer) {
          const userId = customer.metadata?.supabase_user_id

          if (userId) {
            const updateData: any = {
              subscription_status: subscription.status,
            }

            if ('current_period_end' in subscription && subscription.current_period_end) {
              updateData.subscription_current_period_end = new Date(
                Number(subscription.current_period_end) * 1000
              ).toISOString()
            }

            await supabaseAdmin.from('profiles').update(updateData).eq('id', userId)
          }
        }
        break
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription
        const customer = await stripe.customers.retrieve(subscription.customer as string)

        if ('metadata' in customer) {
          const userId = customer.metadata?.supabase_user_id

          if (userId) {
            await supabaseAdmin.from('profiles').update({
              subscription_status: 'canceled',
            }).eq('id', userId)
          }
        }
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice
        const customer = await stripe.customers.retrieve(invoice.customer as string)

        if ('metadata' in customer) {
          const userId = customer.metadata?.supabase_user_id

          if (userId) {
            await supabaseAdmin.from('profiles').update({
              subscription_status: 'past_due',
            }).eq('id', userId)
          }
        }
        break
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }
}
