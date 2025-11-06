import { loadShops } from "@/app/_lib/queries";

import Image from "next/image";
import Hero from "@/app/_components/Hero/Hero";
import ContentWrapper from "@/app/_components/ContentWrapper/ContentWrapper";
import ShopsDisplay from "@/app/_components/ShopsDisplay/ShopsDisplay";
import FranchiseHighlights from "@/app/_components/FranchiseHighlights/FranchiseHighlights";
import Button from "@/app/_components/Button/Button";

import churroHeart from "@/app/_assets/images/churro-heart.webp";
import smiles from "@/app/_assets/images/smiles.webp";
import Testimonials1 from "@/app/_assets/images/testimonials_1.webp";
import Testimonials2 from "@/app/_assets/images/testimonials_2.webp";
import Testimonials3 from "@/app/_assets/images/testimonials_3.webp";

import styles from "./page.module.scss";

const testimonials = [
  {
    image: Testimonials1,
    quote: "Opening my Twist & Buckle shop has been the sweetest decision of my life.",
    partner: "Singapore",
    ourComment: "Our Singapore partner is now being approached by the city’s most prestigious malls, eager to have Twist & Buckle as a flagship tenant."
  },
  {
    image: Testimonials2,
    quote: "We opened our first shop just months ago – and we’re already launching two more.",
    partner: "Philippines",
    ourComment: "With strong local demand, our Philippines partner is now preparing to sub-franchise other regions and grow the brand nationwide."
  },
  {
    image: Testimonials3,
    quote: "From day one, the support has been incredible. It’s a proven concept with a team that truly cares.",
    partner: "Republic of China",
    ourComment: "Our original franchise partner helped set the gold standard for Twist & Buckle operations and customer experience."
  },
]

export default async function Home() {

  const shops = await loadShops();

  return (
    <ContentWrapper>
      <div className="px-4 lg:px-0"><Hero /></div>
      <section>
        <h3>From Asia, With Love (and Churros)</h3>
        <p className="mb-8 home-subtitle">We’ve been sharing our churros with the world since day one, opening doors in vibrant cities and bringing our playful, artisanal touch to every shop.</p>
        <ShopsDisplay shops={shops} />
      </section>
      <FranchiseHighlights />
      <section className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-0">
        <div className={styles.about}>
          <Image
            src={churroHeart}
            alt="Churro Heart"
            width={442}
            height={438}
          />
        </div>
        <div className={styles.aboutIntro}>
          <div className="flex flex-col lg:flex-row lg:items-center gap-8">
            <div>
              <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                <div className={styles.playfullyTraditional}>PLAYFULLY</div>
                <p className="hidden lg:block">Our churros celebrate a beloved classic with a modern, joyful twist. Inspired by South American roots and European flair, we handcraft every loop with care, quality, and a dash of fun.</p>
              </div>
              <div><span className={styles.playfullyTraditional}>TRADITIONAL,</span> <span className={`${styles.uniquelyTwist} lg:ml-4`}>UNIQUELY</span></div>
              <div className={`${styles.uniquelyTwist} block lg:hidden`}>TWIST & BUCKLE</div>
            </div>
            <div className="hidden lg:block">
              <Image
                src={smiles}
                alt="Smiles"
                width={117}
                height={127}
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center mb-4 py-8 lg:py-0">
            <p className="block lg:hidden">Our churros celebrate a beloved classic with a modern, joyful twist. Inspired by South American roots and European flair, we handcraft every loop with care, quality, and a dash of fun.</p>
            <p>Only the finest ingredients, the best churro machines in the world, and a commitment to making every guest smile – that’s the Twist & Buckle way.</p>
            <div className={`${styles.uniquelyTwist} hidden lg:block`}>TWIST & BUCKLE</div>
          </div>
          <Button size="md" href="/about-us">READ MORE ABOUT US</Button>
        </div>
      </section>
      <section id="testimonials">
        <div className={styles.introQuotes}>
          <span>“</span>
          <h3>TESTIMONIALS</h3>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
        {
          testimonials.map((t, i) => (
            <div key={i} className={styles.testimonial}>
              {
                t.image &&
                <div className={styles.testimonialImage}>
                  <Image
                    src={t.image}
                    alt={t.partner}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 33vw"
                  />
                </div>
              }
              <div className={styles.testimonialContent}>
                <p>{t.quote}</p>
                <div>Franchise Partner <span>- {t.partner}</span></div>
                <p className="italic">"{t.ourComment}"</p>
              </div>
            </div>
          ))
        }
        </div>
      </section>
    </ContentWrapper>
  );
}
