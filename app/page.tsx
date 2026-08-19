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

      <WhatsAppFloat />
    </main>
  );
}
