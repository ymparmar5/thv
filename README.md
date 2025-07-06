# THV Digital - Security Services Website

A modern, responsive website for THV Digital, a professional security services company. Built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with black, white, and orange color scheme
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Professional Content**: Security services focused content for organizations

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Language**: JavaScript (ES6+)

## 📁 Project Structure

```
thv/
├── public/
│   ├── images/           # All images organized properly
│   │   ├── thv.jpeg      # Company logo
│   │   ├── monitoring-type.jpeg
│   │   └── plans.jpeg
│   └── index.html
├── src/
│   ├── components/
│   │   ├── layout/       # Layout components
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── utils/        # Utility components
│   │       └── ScrollToTop.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Plans.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── tailwind.config.js   # Tailwind configuration
├── vite.config.js       # Vite configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Primary Orange**: `#ff362c` (Secondary Orange)
- **Dark Orange**: `#e62e24` (Secondary Orange Dark)
- **Black**: `#000000`
- **White**: `#ffffff`
- **Gray Scale**: Various shades for text and backgrounds

### Typography
- **Headings**: Bold, large text for hierarchy
- **Body**: Clean, readable font for content
- **Buttons**: Semi-bold for call-to-actions

## 📱 Pages

### 1. Home Page (`/`)
- Hero section with compelling value proposition
- Feature highlights with icons
- Statistics showcase
- Services overview
- Call-to-action sections

### 2. About Page (`/about`)
- Company mission and vision
- Core values presentation
- Company timeline/journey
- Team information
- Professional achievements

### 3. Services Page (`/services`)
- Detailed service offerings
- Service benefits
- Process explanation
- Technology highlights
- Contact information

### 4. Plans Page (`/plans`)
- Three monitoring plans (Basic, Professional, Enterprise)
- Feature comparison table
- Add-on services
- Pricing information
- Plan selection guidance

### 5. Contact Page (`/contact`)
- Contact form with validation
- Company contact information
- Office locations
- Business hours
- Quick contact options

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd thv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Key Features

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid layouts
- Optimized images and content

### Performance Optimizations
- Vite for fast builds
- Optimized images in public/images/
- Lazy loading for components
- Efficient CSS with Tailwind

### User Experience
- Smooth animations and transitions
- Interactive hover effects
- Clear navigation structure
- Accessible design patterns

### Security Services Focus
- Professional security content
- Service-specific information
- Contact forms for leads
- Clear call-to-actions

## 📞 Contact Information

**THV Digital**
- **Phone**: +91 95584 99515, +91 81404 07272
- **Email**: info@thv.digital
- **Address**: 
  - 103, Vashisth Nakshatra, Gana Rd, Karamsad, Anand, Gujarat 388325
  - C/401, Radha Park, Ayodhya Chowk, 150 Feet Road, Rajkot, Gujarat 360006

## 🔧 Customization

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/layout/Header.jsx`

### Modifying Styles
- Edit `tailwind.config.js` for theme changes
- Modify `src/index.css` for global styles
- Use Tailwind classes for component-specific styling

### Updating Content
- Edit the respective page components
- Update contact information in Header and Footer
- Modify images in `public/images/` directory

## 📄 License

This project is proprietary software for THV Digital.

## 🤝 Contributing

This is a private project for THV Digital. For any issues or suggestions, please contact the development team.

---

**Built with ❤️ for THV Digital Security Services** 