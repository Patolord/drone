import Pricing from "./components/Pricing";
import FinalCTA from "./components/FinalCTA";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import ServiceArea from "./components/ServiceArea";
import Services from "./components/Services";
import WhatsAppFloat from "./components/WhatsAppFloat";
import DroneFollower from "./components/DroneFollower";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-background">

      {/* DRONE SEGUINDO O MOUSE */}
      <DroneFollower />

      <Hero />
      <Services />
      <Gallery />
      <Pricing />
      <ServiceArea />
      <FinalCTA />

      <footer className="border-t border-ink/10 bg-surface px-6 py-10 text-center text-sm text-muted sm:px-8">
        <p>
          © {new Date().getFullYear()} Drone SP · Filmagem e fotografia aérea ·
          São Paulo
        </p>
      </footer>

      <WhatsAppFloat />
    </main>
  );
}
