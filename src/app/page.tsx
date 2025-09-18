import Featured from "@/components/featured";
import Features from "@/components/featured";
import Offer from "@/components/offer";
import Slider from "@/components/slider";
import CulturalHeritage from "@/components/culturalHeritage";
import Image from "next/image";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main>
      <Slider/>
      <Featured/>
      <CulturalHeritage/>
      <Offer/>
      <Map/>
      </main>
  );
}
