import { loadShops } from "@/app/_lib/queries";

import Image from "next/image";
import Hero from "@/app/_components/Hero/Hero";
import ContentWrapper from "@/app/_components/ContentWrapper/ContentWrapper";
import ShopsSlider from "@/app/_components/Sliders/ShopsSlider";

export default async function Home() {

  const shops = await loadShops();

  return (
    <ContentWrapper>
      <Hero />
      <section className="my-16">
        <h3>From Asia, With Love (and Churros)</h3>
        <p>We’ve been sharing our churros with the world since day one, opening doors in vibrant cities and bringing our playful, artisanal touch to every shop.</p>
        <ShopsSlider shops={shops} />
      </section>
    </ContentWrapper>
  );
}
