import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
  typescript: true,
})

export const STRIPE_PLANS = {
  basic: {
    name: 'Basic Plan',
    price: 9900, // $99 in cents
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_BASIC!,
    features: ['50 estimates per month', 'AI blueprint analysis', 'Excel export'],
  },
  pro: {
    name: 'Pro Plan',
    price: 19900, // $199 in cents
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_PRO!,
    features: [
      'Unlimited estimates',
      'AI blueprint analysis',
      'Excel export',
      'Priority support',
      'API access',
    ],
  },
}
