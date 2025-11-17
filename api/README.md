# MATHWA API

Backend API for the MATHWA MBBS Admission Platform.

## Tech Stack

- Node.js + Express
- Supabase (Database + Storage + Auth)
- JWT Authentication
- Razorpay Payment Gateway
- Winston Logger

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
cp .env.example .env
```

Required environment variables:
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Your Supabase anon/public key
- `SUPABASE_SERVICE_KEY` - Your Supabase service role key
- `JWT_SECRET` - Secret key for JWT tokens
- `RAZORPAY_KEY_ID` - Razorpay API key
- `RAZORPAY_KEY_SECRET` - Razorpay API secret

### 3. Setup Supabase Database

First, create the following tables in your Supabase project:

#### Users Table
```sql
CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  full_name VARCHAR(255) NOT NULL,
  role VARCHAR(50) DEFAULT 'user',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Universities Table
```sql
CREATE TABLE universities (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  country VARCHAR(100) NOT NULL,
  city VARCHAR(100),
  description TEXT,
  overview TEXT,
  accreditations TEXT[],
  logo_url TEXT,
  hero_image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  course_duration VARCHAR(50),
  intake_months TEXT[],
  eligibility_criteria TEXT,
  hostel_info TEXT,
  meta_title VARCHAR(255),
  meta_description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Fee Structure Table
```sql
CREATE TABLE fee_structure (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  university_id UUID REFERENCES universities(id) ON DELETE CASCADE,
  year INTEGER NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'INR',
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Applications Table
```sql
CREATE TABLE applications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  city VARCHAR(100) NOT NULL,
  neet_qualified BOOLEAN DEFAULT false,
  neet_score INTEGER,
  university_id UUID REFERENCES universities(id),
  preferred_year INTEGER,
  status VARCHAR(50) DEFAULT 'pending',
  admin_notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Gallery Table
```sql
CREATE TABLE gallery (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  university_id UUID REFERENCES universities(id) ON DELETE CASCADE,
  type VARCHAR(50) DEFAULT 'image',
  url TEXT NOT NULL,
  title VARCHAR(255),
  description TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Testimonials Table
```sql
CREATE TABLE testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  student_name VARCHAR(255) NOT NULL,
  university_name VARCHAR(255),
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  image_url TEXT,
  video_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### FAQs Table
```sql
CREATE TABLE faqs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category VARCHAR(100),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Blogs Table
```sql
CREATE TABLE blogs (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  author VARCHAR(255),
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP,
  meta_title VARCHAR(255),
  meta_description TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Site Stats Table
```sql
CREATE TABLE site_stats (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  students_sent INTEGER DEFAULT 0,
  years_of_partnership INTEGER DEFAULT 0,
  countries INTEGER DEFAULT 0,
  success_rate INTEGER DEFAULT 0,
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Payments Table
```sql
CREATE TABLE payments (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  application_id UUID REFERENCES applications(id),
  order_id VARCHAR(255),
  payment_id VARCHAR(255),
  signature VARCHAR(255),
  amount DECIMAL(10, 2) NOT NULL,
  currency VARCHAR(10) DEFAULT 'INR',
  status VARCHAR(50) DEFAULT 'created',
  purpose VARCHAR(100),
  paid_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Contact Submissions Table
```sql
CREATE TABLE contact_submissions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Intake Info Table
```sql
CREATE TABLE intake_info (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  university_id UUID REFERENCES universities(id) ON DELETE CASCADE,
  month VARCHAR(50) NOT NULL,
  year INTEGER NOT NULL,
  seats_available INTEGER,
  application_deadline DATE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### 4. Create Storage Buckets

In Supabase, create the following storage buckets:
- `uploads` (for general uploads)
- `university-images` (for university photos)
- `documents` (for application documents)

Make them public or set appropriate RLS policies.

### 5. Run Setup Script

Initialize the database with sample data:

```bash
npm run setup
```

This will create:
- Default admin user (email: admin@mathwa.com, password: Admin@123)
- Sample university (Kyrgyz State University)
- Default FAQs
- Site statistics

### 6. Start Development Server

```bash
npm run dev
```

The API will be available at `http://localhost:3001`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/admin/login` - Admin login

### Universities (Public)
- `GET /api/universities` - Get all active universities
- `GET /api/universities/:slug` - Get university by slug

### Universities (Admin)
- `GET /api/universities/admin/all` - Get all universities
- `POST /api/universities/admin` - Create university
- `PUT /api/universities/admin/:id` - Update university
- `DELETE /api/universities/admin/:id` - Delete university
- `PATCH /api/universities/admin/:id/toggle` - Toggle active status

### Applications
- `POST /api/applications` - Submit application
- `GET /api/applications/admin` - Get all applications (admin)
- `GET /api/applications/admin/:id` - Get single application (admin)
- `PATCH /api/applications/admin/:id/status` - Update application status
- `DELETE /api/applications/admin/:id` - Delete application

### Testimonials
- `GET /api/testimonials` - Get all active testimonials
- `GET /api/testimonials/admin` - Get all testimonials (admin)
- `POST /api/testimonials/admin` - Create testimonial
- `PUT /api/testimonials/admin/:id` - Update testimonial
- `DELETE /api/testimonials/admin/:id` - Delete testimonial

### FAQs
- `GET /api/faqs` - Get all active FAQs
- `GET /api/faqs/admin` - Get all FAQs (admin)
- `POST /api/faqs/admin` - Create FAQ
- `PUT /api/faqs/admin/:id` - Update FAQ
- `DELETE /api/faqs/admin/:id` - Delete FAQ

### Blogs
- `GET /api/blogs` - Get all published blogs
- `GET /api/blogs/:slug` - Get blog by slug
- `GET /api/blogs/admin/all` - Get all blogs (admin)
- `POST /api/blogs/admin` - Create blog
- `PUT /api/blogs/admin/:id` - Update blog
- `DELETE /api/blogs/admin/:id` - Delete blog

### Stats
- `GET /api/stats/public` - Get public site stats
- `GET /api/stats/admin/dashboard` - Get admin dashboard stats
- `PUT /api/stats/admin/public` - Update public stats

### Uploads
- `POST /api/uploads/single` - Upload single file
- `POST /api/uploads/multiple` - Upload multiple files
- `DELETE /api/uploads` - Delete file

### Payments
- `POST /api/payments/create-order` - Create Razorpay order
- `POST /api/payments/verify` - Verify payment

### Contact
- `POST /api/contact` - Submit contact form

## Deployment to Cloudflare Workers

### Option 1: Cloudflare Workers (Recommended for API)

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Login to Cloudflare:
```bash
wrangler login
```

3. Create `wrangler.toml`:
```toml
name = "mathwa-api"
main = "src/index.js"
compatibility_date = "2024-01-01"

[vars]
NODE_ENV = "production"
```

4. Add secrets:
```bash
wrangler secret put SUPABASE_URL
wrangler secret put SUPABASE_ANON_KEY
wrangler secret put SUPABASE_SERVICE_KEY
wrangler secret put JWT_SECRET
wrangler secret put RAZORPAY_KEY_ID
wrangler secret put RAZORPAY_KEY_SECRET
```

5. Deploy:
```bash
wrangler deploy
```

### Option 2: Railway/Render (Alternative)

The API can also be deployed to Railway or Render as a traditional Node.js app.

## Security Notes

- Change the default admin password immediately after first login
- Keep your JWT_SECRET secure and use a strong random string
- Set up proper CORS origins in production
- Enable Supabase RLS (Row Level Security) policies
- Use environment variables for all sensitive data
- Implement rate limiting for production

## License

MIT
