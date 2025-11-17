# MATHWA Client

Frontend application for the MATHWA MBBS Admission Platform built with Remix.

## Tech Stack

- **Framework**: Remix (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Forms**: React Hook Form + Zod
- **HTTP Client**: Axios

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

Required variables:
- `API_URL` - Backend API URL
- `WHATSAPP_NUMBER` - WhatsApp contact number
- `RAZORPAY_KEY_ID` - Razorpay public key

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

## Project Structure

```
app/
├── components/      # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   └── ...
├── routes/         # Page routes
│   ├── _index.tsx  # Home page
│   ├── about.tsx
│   ├── apply.tsx
│   └── ...
├── styles/         # Global styles
│   └── tailwind.css
├── utils/          # Utility functions
│   ├── api.ts
│   └── whatsapp.ts
└── root.tsx        # Root component
```

## Pages

- `/` - Home page with hero, stats, and university listings
- `/about` - About MATHWA and partnerships
- `/universities` - List of partner universities
- `/universities/:slug` - Individual university page
- `/apply` - Multi-step application form
- `/blog` - Blog articles
- `/contact` - Contact form

## Key Features

- **Responsive Design**: Mobile-first, works on all devices
- **Smooth Animations**: Framer Motion for engaging UX
- **SEO Optimized**: Dynamic meta tags for each page
- **WhatsApp Integration**: Direct chat functionality
- **Trust Elements**: Badges, stats counters, testimonials
- **Multi-step Forms**: Intuitive application process

## Deployment to Cloudflare Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to Cloudflare Pages:
```bash
npx wrangler pages deploy ./build/client
```

Or connect your GitHub repository to Cloudflare Pages for automatic deployments.

## Build for Production

```bash
npm run build
npm start
```

## Environment Variables in Production

Set the following in Cloudflare Pages settings:
- `API_URL`
- `WHATSAPP_NUMBER`
- `RAZORPAY_KEY_ID`
- `GA_TRACKING_ID` (optional)
- `META_PIXEL_ID` (optional)

## License

MIT
