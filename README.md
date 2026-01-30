# Digital Dekho - Global Digital Agency Platform

A complete, production-ready digital agency website built with Next.js, featuring dynamic services, city-based SEO pages, admin panel, and comprehensive digital marketing tools.

## 🚀 Features

### Frontend Features
- **Modern Design**: Clean, professional, and mobile-first responsive design
- **SEO Optimized**: First-class SEO with dynamic meta tags, schema markup, and sitemap
- **Dynamic Services**: Admin-managed services with detailed pages
- **City-Based Pages**: Auto-generated service pages for different cities (e.g., `/services/web-development-in-mumbai`)
- **Blog System**: SEO-focused blog with categories and tags
- **Project Portfolio**: Showcase of completed projects
- **Testimonials**: Client testimonials with ratings
- **Products Section**: Showcase digital products
- **WhatsApp Integration**: Floating WhatsApp button with city-based numbers

### Admin Panel Features
- **Dashboard**: Comprehensive analytics and quick actions
- **Services Management**: CRUD operations for services
- **Location Management**: Countries and cities management
- **Content Management**: Blog posts, projects, testimonials
- **Lead Management**: Contact form submissions and inquiries
- **SEO Tools**: Sitemap generation, robots.txt management
- **User Management**: Admin user roles and permissions

### SEO Features
- **Dynamic Meta Tags**: Auto-generated for all pages
- **Schema Markup**: Service, LocalBusiness, FAQ schemas
- **XML Sitemap**: Auto-generated with all pages
- **Robots.txt**: Configurable via admin panel
- **OpenGraph & Twitter Cards**: Social media optimization
- **Canonical URLs**: Prevent duplicate content
- **Internal Linking**: Automatic cross-linking

## 🛠 Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, Tailwind CSS
- **Backend**: Next.js API Routes, Node.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT tokens with HTTP-only cookies
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **SEO**: Next.js built-in SEO + custom schema

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- MongoDB (local or cloud)
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd digitaldekho-agency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Update `.env.local` with your values:
   ```env
   MONGODB_URI=mongodb://localhost:27017/digitaldekho
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   NEXTAUTH_SECRET=your-nextauth-secret-key
   NEXTAUTH_URL=http://localhost:3000
   WHATSAPP_NUMBER=+919996821315
   ADMIN_EMAIL=admin@digitaldekho.com
   ADMIN_PASSWORD=admin123
   ```

4. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   
   # Or use MongoDB Atlas cloud database
   ```

5. **Seed the database**
   ```bash
   npm run seed
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Admin Panel: http://localhost:3000/admin
   - Admin Login: Use credentials from .env.local

## 🗂 Project Structure

```
digitaldekho-agency/
├── app/                          # Next.js App Router
│   ├── admin/                    # Admin panel pages
│   ├── api/                      # API routes
│   ├── services/                 # Service pages
│   ├── blog/                     # Blog pages
│   ├── projects/                 # Project pages
│   ├── products/                 # Product pages
│   ├── globals.css               # Global styles
│   ├── layout.js                 # Root layout
│   └── page.js                   # Home page
├── components/                   # React components
│   ├── admin/                    # Admin panel components
│   ├── home/                     # Home page components
│   ├── layout/                   # Layout components
│   ├── services/                 # Service page components
│   └── ui/                       # Reusable UI components
├── lib/                          # Utility libraries
│   ├── mongodb.js                # Database connection
│   ├── auth.js                   # Authentication utilities
│   └── schema.js                 # SEO schema generators
├── models/                       # Mongoose models
│   ├── AdminUser.js
│   ├── Service.js
│   ├── City.js
│   ├── Country.js
│   ├── Blog.js
│   ├── Project.js
│   ├── Product.js
│   ├── Testimonial.js
│   └── Lead.js
├── scripts/                      # Utility scripts
│   └── seed.js                   # Database seeding
├── public/                       # Static assets
└── README.md
```

## 🔧 Configuration

### Database Models

The application uses the following main models:

- **Service**: Digital services offered
- **Country**: Countries where services are available
- **City**: Cities within countries
- **Blog**: Blog posts with SEO optimization
- **Project**: Portfolio projects
- **Product**: Digital products
- **Testimonial**: Client testimonials
- **Lead**: Contact form submissions
- **AdminUser**: Admin panel users

### SEO Configuration

The application automatically generates:
- Dynamic meta tags for all pages
- XML sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Schema.org markup for services and locations
- OpenGraph and Twitter card meta tags

### WhatsApp Integration

Configure WhatsApp numbers in:
- Country model (default for country)
- City model (city-specific override)
- Environment variables (global fallback)

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Environment Variables for Production

Update these for production:
```env
MONGODB_URI=your-production-mongodb-uri
JWT_SECRET=your-production-jwt-secret
NEXTAUTH_SECRET=your-production-nextauth-secret
NEXTAUTH_URL=https://yourdomain.com
WHATSAPP_NUMBER=your-whatsapp-number
```

### Deployment Platforms

The application can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS**
- **DigitalOcean**
- **Heroku**

## 📊 Admin Panel

### Access
- URL: `/admin`
- Default credentials: Set in `.env.local`

### Features
- **Dashboard**: Overview of leads, services, cities
- **Services**: Manage service offerings
- **Locations**: Add/edit countries and cities
- **Content**: Blog posts, projects, testimonials
- **Leads**: View and manage inquiries
- **SEO**: Sitemap and robots.txt management

## 🔍 SEO Features

### Automatic SEO
- Dynamic meta titles and descriptions
- Schema.org structured data
- XML sitemap generation
- Robots.txt management
- Canonical URLs
- OpenGraph tags

### City-Based SEO
- Auto-generated pages: `/services/[service]-in-[city]`
- Localized content and meta tags
- City-specific testimonials and projects
- Local business schema markup

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: support@digitaldekho.com
- WhatsApp: +919996821315
- Documentation: Check this README

## 🔄 Updates

To update the project:
1. Pull latest changes
2. Run `npm install` for new dependencies
3. Run migrations if any
4. Restart the application

---

Built with ❤️ by Digital Dekho Team# digidekho
# digidekho
# digidekho
# digidekho
# digidekho
