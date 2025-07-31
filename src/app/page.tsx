import Featured from "@/components/featured";
import Features from "@/components/featured";
import Offer from "@/components/offer";
import Slider from "@/components/slider";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Slider/>
      <Featured/>
      <Offer/>
    </main>
  );
}
