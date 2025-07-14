import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './hooks/use-theme';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import SEOBoost from "./components/SEOBoost";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";
import "./App.css";
import Testimonials from "./pages/Testimonials";

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
        <ScrollToTop />
        <SEOBoost />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/services" element={<Services />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/testimonials" element={<Testimonials />} />
          </Routes>
        </main>
        <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;

{/* <Route path="/blog" element={<Blog />} /> */ }
{/* <Route path="/chat" element={<Chat />} />
          <Route path="/testimonials" element={<Testimonials />} /> */}

//           import Blog from "./pages/Blog";
// import Chat from "./pages/Chat";
// import Testimonials from "./pages/Testimonials";