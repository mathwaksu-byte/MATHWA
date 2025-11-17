# MATHWA - Quick Start Guide

Get the complete MATHWA platform running in 10 minutes!

## 📋 Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] Supabase account (free)
- [ ] Razorpay account (test mode is fine)

## 🚀 5-Step Setup

### Step 1: Setup Supabase (5 minutes)

1. Go to https://supabase.com and create a free account
2. Create a new project (wait 2-3 minutes for provisioning)
3. Go to **SQL Editor** in the left sidebar
4. Open `database-schema.sql` from the project root
5. Copy all contents and paste into SQL Editor
6. Click **Run** to execute
7. Go to **Storage** in left sidebar
8. Create these buckets (all public):
   - `uploads`
   - `university-images`
   - `documents`

9. Go to **Settings** → **API** and copy:
   - Project URL
   - `anon` public key
   - `service_role` secret key

### Step 2: Setup API (2 minutes)

```powershell
cd C:\Users\mhdtb\OneDrive\Desktop\MATHWAV1\api
npm install
copy .env.example .env
notepad .env
```

In `.env`, paste your Supabase credentials:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_KEY=your_service_role_key_here
JWT_SECRET=any_random_string_min_32_chars
```

Initialize database:
```powershell
npm run setup
npm run dev
```

✅ API running at http://localhost:3001

**Test it:**
```powershell
curl http://localhost:3001/health
```

### Step 3: Setup Client (1 minute)

Open a **NEW terminal window**:

```powershell
cd C:\Users\mhdtb\OneDrive\Desktop\MATHWAV1\client
npm install
copy .env.example .env
notepad .env
```

In `.env`:
```env
API_URL=http://localhost:3001/api
WHATSAPP_NUMBER=911234567890
RAZORPAY_KEY_ID=rzp_test_your_key
```

Start client:
```powershell
npm run dev
```

✅ Client running at http://localhost:3000

### Step 4: Setup Admin (1 minute)

Open a **NEW terminal window**:

```powershell
cd C:\Users\mhdtb\OneDrive\Desktop\MATHWAV1\admin
npm install
copy .env.example .env
notepad .env
```

In `.env`:
```env
VITE_API_URL=http://localhost:3001/api
```

Start admin:
```powershell
npm run dev
```

✅ Admin running at http://localhost:3002

### Step 5: Test Everything (1 minute)

1. **Test Client**: Open http://localhost:3000
   - Should see beautiful home page
   - Click around, test navigation

2. **Test Admin**: Open http://localhost:3002
   - Login with:
     - Email: `admin@mathwa.com`
     - Password: `Admin@123`
   - See dashboard with stats
   - Browse universities, applications

3. **Test Application Flow**:
   - Go to client → Apply Now
   - Fill out the form
   - Submit application
   - Check admin panel → Applications
   - Your application should appear!

## 🎉 You're Done!

Your complete MATHWA platform is now running with:
- ✅ Backend API with authentication
- ✅ Public website with all features
- ✅ Admin dashboard for management
- ✅ Database with sample data
- ✅ All integrations configured

## 🔑 Default Credentials

**Admin Login:**
- Email: admin@mathwa.com
- Password: Admin@123

⚠️ **IMPORTANT:** Change this password immediately in production!

## 📱 What's Included

### Client (http://localhost:3000)
- Home page with hero section
- Universities showcase
- Multi-step application form
- Blog section (ready for content)
- Contact form
- WhatsApp integration
- Responsive design

### Admin (http://localhost:3002)
- Dashboard with live statistics
- Manage universities
- View/manage applications
- Manage testimonials
- Manage FAQs
- Manage blog posts
- User management

### API (http://localhost:3001)
- RESTful endpoints
- JWT authentication
- File uploads
- Payment processing (Razorpay)
- CRM webhooks
- Email notifications ready

## 🛠️ Next Steps

1. **Add Content:**
   - Login to admin panel
   - Add more universities
   - Create blog posts
   - Add FAQs

2. **Customize Branding:**
   - Update logo in client
   - Add hero images
   - Customize colors in `tailwind.config.js`

3. **Configure Integrations:**
   - Set up WhatsApp Business API
   - Configure Razorpay live keys
   - Add CRM webhook URL
   - Set up email SMTP

4. **Deploy to Production:**
   - See README.md for Cloudflare deployment
   - Set up custom domain
   - Configure SSL certificates

## 🐛 Common Issues

### API won't start
```powershell
# Check if port is in use
netstat -ano | findstr :3001
# Kill process if needed
taskkill /PID <process_id> /F
```

### Database connection error
- Double-check Supabase credentials
- Ensure SQL script ran successfully
- Verify RLS policies are enabled

### Client can't connect to API
- Make sure API is running
- Check API_URL in client .env
- Test API health endpoint

### Admin login fails
- Ensure API is running
- Verify default credentials
- Check browser console for errors

## 💡 Pro Tips

1. **Use different terminals** for each service (API, Client, Admin)
2. **Save your .env files** - don't commit them to git!
3. **Test in incognito** to avoid cache issues
4. **Check browser console** for frontend errors
5. **Check terminal logs** for backend errors

## 📚 Learn More

- Full documentation: `README.md`
- API documentation: `api/README.md`
- Client documentation: `client/README.md`
- Admin documentation: `admin/README.md`

## 🆘 Need Help?

Check the troubleshooting section in the main README.md

## 🎯 Ready for Production?

When ready to deploy:
1. Change all default passwords
2. Set up production database backup
3. Configure production environment variables
4. Set up monitoring and alerts
5. Test all features thoroughly
6. Deploy to Cloudflare Pages (Client & Admin)
7. Deploy API to Railway/Render.

---

**Congratulations!** Your MATHWA platform is ready to help students apply for MBBS abroad! 🎓
