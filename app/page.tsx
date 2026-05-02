import Differentials from "./components/Differentials";
import FinalCTA from "./components/FinalCTA";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import ServiceArea from "./components/ServiceArea";
import Services from "./components/Services";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col bg-black">
      <Hero />
      <Services />
      <Differentials />
      <Gallery />
      <ServiceArea />
      <FinalCTA />

      <footer className="border-t border-white/5 bg-black px-6 py-10 text-center text-sm text-zinc-500 sm:px-8">
        <p>
          © {new Date().getFullYear()} Drone SP · Filmagem e fotografia aérea ·
          São Paulo
        </p>
      </footer>

      <WhatsAppFloat />
    </main>
  );
}
