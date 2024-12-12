import Navbar from "./components/Navbar";
import './App.css';
import Hero from "./components/Hero";
import Services from "./components/Service";
import About from "./components/About";
import WorkingSteps from "./components/WorkingSteps";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




export default function App() {
  return (<>
    <Navbar />
    <Hero />
 <Services />
 <About />
 <WorkingSteps />
 <Pricing />
 <Testimonial />
 <Contact />
 <Footer />
  </>

  )
}; 