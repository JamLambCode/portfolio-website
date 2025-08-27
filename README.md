# Jakob Lamber - Portfolio Website

## Description

A modern, responsive portfolio website showcasing Jakob Lamber's professional experience, projects, and technical skills. Built with React and TypeScript, this portfolio features a clean design with dark/light theme support, smooth animations, and a mobile-first responsive layout. The site serves as a comprehensive showcase of Jakob's work as a software engineer and computer science graduate from NYU.

## Key Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **Theme Toggle**: Dark and light mode support with smooth transitions
- **Interactive Elements**: Scroll-triggered animations and parallax effects
- **Professional Sections**: About, Experience, Projects, Skills, and Contact
- **Modern UI Components**: Built with shadcn/ui components and Tailwind CSS
- **Performance Optimized**: Fast loading with Vite build system

## Installation

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd jakob-lamb-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## Usage

### Development

- **Development Server**: `npm run dev` - Starts the development server with hot reload
- **Build**: `npm run build` - Creates a production build
- **Preview Build**: `npm run preview` - Previews the production build locally
- **Linting**: `npm run lint` - Runs ESLint for code quality

### Customization

1. **Content Updates**: Modify the data in `src/pages/Index.tsx` to update your information
2. **Styling**: Customize colors and themes in `tailwind.config.ts`
3. **Components**: Add new UI components in the `src/components/ui/` directory
4. **Images**: Replace images in the `public/images/` and `public/lovable-uploads/` directories

## Features

### Core Functionality

- **Navigation**: Fixed navigation bar with smooth scrolling to sections
- **Hero Section**: Dynamic parallax hero with professional introduction
- **About Section**: Personal background and education information
- **Experience Timeline**: Professional work history with company details
- **Projects Showcase**: Portfolio of technical projects with descriptions
- **Skills Display**: Comprehensive list of technical skills and technologies
- **Contact Information**: Professional contact details and social links
- **Theme Switching**: Toggle between light and dark themes

### Technical Features

- **Responsive Layout**: Adapts seamlessly across all device sizes
- **Scroll Animations**: Intersection Observer-based scroll-triggered animations
- **Performance**: Optimized rendering and smooth scrolling
- **Accessibility**: Semantic HTML and keyboard navigation support
- **SEO Ready**: Proper meta tags and structured content

## Technologies Used

### Frontend Framework

- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe JavaScript development
- **Vite**: Fast build tool and development server

### UI & Styling

- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Lucide React**: Beautiful icon library
- **Framer Motion**: Animation library for smooth transitions

### State Management & Data

- **React Query**: Data fetching and caching
- **React Router**: Client-side routing
- **React Hook Form**: Form handling and validation

### Development Tools

- **ESLint**: Code linting and quality
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

### Areas for Improvement

- Additional portfolio sections
- Enhanced animations and interactions
- Performance optimizations
- Accessibility improvements
- Internationalization support

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **shadcn/ui**: For the excellent component library
- **Tailwind CSS**: For the utility-first CSS framework
- **Vite**: For the fast build tool
- **NYU**: For the educational foundation
- **Open Source Community**: For the amazing tools and libraries

## Repository Structure

```
jakob-lamb-portfolio/
├── public/                 # Static assets and images
│   ├── images/            # Portfolio images
│   └── lovable-uploads/   # Profile and project images
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   └── ThemeToggle.tsx # Theme switching component
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   │   ├── Index.tsx     # Main portfolio page
│   │   └── NotFound.tsx  # 404 error page
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── package.json           # Dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── vite.config.ts         # Vite build configuration
└── tsconfig.json          # TypeScript configuration
```

## Contact

- **Email**: mr.jamlamb@gmail.com
- **LinkedIn**: [Jakob Lamber](https://linkedin.com/in/jakob-lamber)
- **GitHub**: [Your GitHub Profile]
- **Location**: New York, NY

---

_Built with ❤️ using React, TypeScript, and Tailwind CSS_
