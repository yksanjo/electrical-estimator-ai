# EstimateAI - AI-Powered Electrical Estimating Platform

An intelligent SaaS platform that uses AI to analyze electrical blueprints and generate accurate material estimates for electrical contractors.

## Features

- 🤖 **AI Blueprint Analysis** - GPT-4 Vision automatically detects outlets, switches, lights, panels, and more
- 📊 **Automated Material Lists** - Generate comprehensive material lists from blueprints in minutes
- 💳 **Subscription Billing** - Stripe-powered subscription management with multiple tiers
- 🔐 **Secure Authentication** - Email/password authentication with MFA support
- 📁 **Cloud Storage** - Secure blueprint storage with AWS S3
- 📈 **Dashboard Analytics** - Track all your estimates in one place
- 📄 **Excel Export** - Export estimates to Excel for easy sharing

## Tech Stack

- **Frontend**: Next.js 14 (App Router), React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes (Serverless)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: AWS S3
- **AI**: OpenAI GPT-4 Vision
- **Payments**: Stripe
- **Hosting**: Vercel

## Prerequisites

Before you begin, ensure you have:

- Node.js 18+ installed
- npm or yarn package manager
- A Supabase account
- An OpenAI API key
- An AWS account (for S3)
- A Stripe account
- A Vercel account (for deployment)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd electrical-estimator-ai
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Project Settings > API to get your project URL and anon key
3. Go to Project Settings > Database and copy the service role key
4. Run the database schema:
   - Go to the SQL Editor in Supabase
   - Copy and paste the contents of `supabase/schema.sql`
   - Click "Run"

### 3. Set Up AWS S3

1. Create an S3 bucket in your AWS console
2. Configure CORS for your bucket:
```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST"],
    "AllowedOrigins": ["*"],
    "ExposeHeaders": []
  }
]
```
3. Create an IAM user with S3 access and get access keys

### 4. Set Up OpenAI

1. Get your API key from [platform.openai.com](https://platform.openai.com)
2. Ensure you have access to GPT-4 Vision

### 5. Set Up Stripe

1. Create a Stripe account at [stripe.com](https://stripe.com)
2. Get your publishable and secret keys from the Dashboard
3. Create two products:
   - **Basic Plan**: $99/month
   - **Pro Plan**: $199/month
4. Copy the price IDs for each product
5. Set up a webhook endpoint pointing to `/api/stripe/webhook`
   - Events to listen for:
     - `checkout.session.completed`
     - `customer.subscription.updated`
     - `customer.subscription.deleted`
     - `invoice.payment_failed`
6. Copy the webhook signing secret

### 6. Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
STRIPE_SECRET_KEY=sk_test_xxx
STRIPE_WEBHOOK_SECRET=whsec_xxx
NEXT_PUBLIC_STRIPE_PRICE_ID_BASIC=price_xxx
NEXT_PUBLIC_STRIPE_PRICE_ID_PRO=price_xxx

# AWS S3
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
AWS_S3_BUCKET=your_bucket_name

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 7. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add all environment variables in Vercel project settings
4. Update `NEXT_PUBLIC_APP_URL` to your production URL
5. Deploy!

### Post-Deployment

1. Update Stripe webhook endpoint to your production URL
2. Update Supabase redirect URLs:
   - Go to Authentication > URL Configuration
   - Add your production URL to Site URL and Redirect URLs

## Project Structure

```
electrical-estimator-ai/
├── app/
│   ├── api/
│   │   ├── estimates/         # Estimate creation API
│   │   └── stripe/            # Stripe webhooks & sessions
│   ├── dashboard/             # Protected dashboard routes
│   │   ├── estimates/
│   │   └── settings/
│   ├── login/                 # Authentication pages
│   ├── privacy/               # Privacy policy
│   └── terms/                 # Terms of service
├── lib/
│   ├── supabase/              # Supabase client config
│   ├── openai.ts              # OpenAI integration
│   ├── s3.ts                  # AWS S3 utilities
│   └── stripe.ts              # Stripe configuration
├── supabase/
│   └── schema.sql             # Database schema
└── middleware.ts              # Auth middleware
```

## Usage

### For Customers

1. **Sign Up**: Create an account at /login
2. **Subscribe**: Choose a plan (Basic $99/mo or Pro $199/mo)
3. **Upload Blueprint**: Click "New Estimate" and upload a PDF/image
4. **Get Results**: AI analyzes the blueprint and generates component counts
5. **Export**: Download your estimate as Excel

### For Developers

#### Adding New Features

1. Database changes: Update `supabase/schema.sql`
2. API routes: Add to `app/api/`
3. UI pages: Add to `app/`

#### Testing Stripe Locally

Use Stripe CLI to forward webhooks:
```bash
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

## Cost Breakdown

### Monthly Fixed Costs
- Vercel Pro: $20/mo
- Supabase Pro: $25/mo
- Sentry: $26/mo
- **Total**: ~$71/mo

### Variable Costs (per customer)
- OpenAI API: ~$7.50/mo (150 estimates)
- AWS S3: ~$0.50/mo
- Stripe fees: 2.9% + 30¢ per transaction
- **Total**: ~$8-10/mo per customer

### Break-Even Analysis
- At $99/mo Basic plan: Need 3-4 customers to break even
- At $199/mo Pro plan: Need 2 customers to break even

## Security & Compliance

- ✅ SOC 2 controls implemented (encryption, access control, audit logs)
- ✅ GDPR/CCPA compliant (data deletion, export, privacy policy)
- ✅ PCI DSS Level 1 (Stripe handles all payment data)
- ✅ HTTPS/TLS 1.3 encryption
- ✅ Row-level security (RLS) in database
- ✅ Multi-factor authentication support

## License

Proprietary - All Rights Reserved

## Support

For support, email support@estimateai.com

---

Built with ❤️ for electrical contractors
