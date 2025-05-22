# Portfolio One

A modern, responsive portfolio website built with React and TypeScript.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean and professional user interface with smooth animations
- **Multiple Pages**: Home, About, Projects, Blog, Chat, Testimonials, and Contact pages
- **Project Showcase**: Filterable projects grid with categories
- **Blog Section**: Categorized blog posts with filtering capability
- **Chat Functionality**: Real-time chat interface for direct communication
- **Testimonials**: Display client testimonials and feedback
- **Contact Form**: Easy-to-use contact form for inquiries

## Pages

### Home
The landing page featuring a hero section, featured projects, and a brief about section. Includes a floating chat icon for quick access to the chat feature.

### About
Detailed information about the developer, including skills, experience, and background.

### Projects
A filterable grid of projects with details such as technologies used, descriptions, and links to live demos and GitHub repositories.

### Blog
A collection of blog posts categorized by topics like Development, Design, Performance, and Accessibility.

### Chat
A messaging interface for direct communication with visitors.

### Testimonials
Client testimonials and feedback showcasing past work relationships.

### Contact
A contact form for inquiries and project requests.

## Technologies Used

- **React**: Frontend library for building the user interface
- **TypeScript**: For type-safe code
- **React Router**: For navigation between pages
- **CSS Modules**: For component-scoped styling
- **Vite**: Fast build tool and development server

## Project Structure

```
portfolio-one/
├── src/
│   ├── components/
│   │   ├── ui/          # UI components
│   │   ├── Footer.tsx   # Footer component
│   │   └── Navbar.tsx   # Navigation component
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   ├── pages/           # Page components
│   │   ├── Home.tsx     # Home page
│   │   ├── About.tsx    # About page
│   │   ├── Projects.tsx # Projects page
│   │   ├── Blog.tsx     # Blog page
│   │   ├── Chat.tsx     # Chat page
│   │   └── ...          # Other pages
│   ├── App.tsx          # Main app component with routing
│   └── main.tsx         # Entry point
└── ...
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:8080`

## Deployment

Build the project for production:
```
npm run build
```

The build output will be in the `dist` directory, ready to be deployed to your hosting provider of choice.

## License

MIT @Nishchay_Sharma (2025)