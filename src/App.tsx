import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Facilities } from './components/Facilities';
import { Programs } from './components/Programs';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />

      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Programs />
        <Facilities />
        <CTA />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}