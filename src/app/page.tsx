import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"

export default function Home() {
  return (
    <div className="pt-1">
      <div className="px-[20px]">
      <Navbar />
      <Hero />
      
      </div>
    </div>
  );
}
