# E-Library System

A modern, production-ready digital library system built with Next.js, designed for educational institutions. This platform provides seamless access to books, real-time availability checking, and convenient print services.

## 🌟 Features

- **Digital Library Catalog**: Search and browse thousands of books
- **Real-time Availability**: Check book availability and due dates instantly
- **Print Services**: Submit print requests online with GPay payment integration
- **Mobile-First Design**: Fully responsive, modern UI with black and blue theme
- **Google Authentication**: Quick login with Gmail ID
- **WhatsApp Support**: Direct communication channel for quick assistance

## 🏗️ Architecture

This project follows a clean separation between Frontend (UI) and Backend (API Logic) while being deployed as a single Vercel project.

### Frontend (UI Layer)
- **Pages**: Home, About, E-Library, Print Services, How It Works, Contact, FAQ, Privacy, Terms
- **Components**: Navbar, Footer, BookCard, PrintForm, SectionReveal, CTAButton
- **Styling**: Tailwind CSS with custom theme
- **Responsiveness**: Mobile-first, fully responsive design

### Backend (Logic Layer)
- **API Routes**:
  - `/api/books` - Get/search books with filtering
  - `/api/book-status` - Check specific book availability
  - `/api/print-request` - Handle print request submissions
- **Data**: JSON-based with example/demo data
- **Responses**: Clean JSON format for frontend consumption

## 🚀 Tech Stack

- **Frontend Framework**: Next.js 14.2.0 (Pages Router)
- **React**: 18.3.0
- **Styling**: Tailwind CSS 3.4.3
- **Icons**: Lucide React
- **TypeScript**: 5.4.0
- **Hosting**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd e-library-system
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Deployment to Vercel

### Automatic Deployment
1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Click Deploy

### Manual Deployment Configuration
If you need to configure manually:

**Build Command:**
```bash
npm run build
```

**Output Directory:**
```
.next
```

**Install Command:**
```bash
npm install
```

**Environment Variables:**
None required for this demo project

## 📁 Project Structure

```
e-library-system/
├── components/          # Frontend: Reusable UI components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── BookCard.tsx
│   ├── PrintForm.tsx
│   ├── SectionReveal.tsx
│   └── CTAButton.tsx
├── pages/              # Frontend: Page components
│   ├── api/           # Backend: API routes
│   │   ├── books.ts
│   │   ├── book-status.ts
│   │   └── print-request.ts
│   ├── index.tsx
│   ├── about.tsx
│   ├── elibrary.tsx
│   ├── print-services.tsx
│   ├── how-it-works.tsx
│   ├── contact.tsx
│   ├── faq.tsx
│   ├── privacy.tsx
│   ├── terms.tsx
│   ├── _app.tsx
│   └── _document.tsx
├── styles/            # Global styles
│   └── globals.css
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 🎨 Design Features

- **Color Palette**: Black, Blue, and White
- **Typography**: Professional sans-serif fonts
- **Animations**: Smooth scroll, hover effects, section reveal animations
- **Responsive**: Mobile-first approach with breakpoints for all devices

## 📱 Pages

1. **Home**: Hero section, problem-solution, key features, CTA
2. **About**: Mission, features, benefits
3. **E-Library**: Book catalog with search and filter
4. **Print Services**: Print request form, pricing, how it works
5. **How It Works**: Step-by-step guide
6. **Contact**: Contact form, WhatsApp, Google Form
7. **FAQ**: Accordion-style FAQs
8. **Privacy Policy**: Comprehensive privacy policy
9. **Terms & Conditions**: Detailed terms and conditions

## 🔧 API Endpoints

### GET /api/books
Get all books or search by query.

**Query Parameters:**
- `search` (optional): Search by book name or author
- `category` (optional): Filter by category

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "bookName": "Data Structures and Algorithms",
      "author": "Mark Allen Weiss",
      "category": "Computer Science",
      "availability": "Issued",
      "location": "Main Library - Shelf A2",
      "borrower": "John D",
      "dueDate": "18-03-2026",
      "publicationYear": 2021
    }
  ]
}
```

### GET /api/book-status?id={bookId}
Get specific book status.

**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "bookName": "Data Structures and Algorithms",
    "status": "Issued",
    "location": "Main Library - Shelf A2",
    "dueDate": "18-03-2026"
  }
}
```

### POST /api/print-request
Submit a print request.

**Request Body:**
```json
{
  "documentName": "Unit-2 Notes.pdf",
  "printType": "bw",
  "copies": 2,
  "paymentMethod": "gpay"
}
```

**Response:**
```json
{
  "success": true,
  "data": {
    "documentName": "Unit-2 Notes.pdf",
    "printType": "bw",
    "copies": 2,
    "paymentMethod": "gpay",
    "status": "Pending",
    "requestId": "PR1234567890"
  },
  "message": "Print request submitted successfully"
}
```

## 📄 License

This project is created for educational purposes.

## 👥 Contact

- **Email**: elibrary.support@gmail.com
- **Phone**: +91 9XXXXXXXXX
- **Location**: College Main Library, India

## 🎯 Future Enhancements

- Database integration for persistent storage
- User authentication and session management
- Book reservation system
- Fine payment integration
- Email notifications for due dates
- Advanced analytics dashboard
