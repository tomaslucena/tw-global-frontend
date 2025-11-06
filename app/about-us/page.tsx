import Image from "next/image"
import ContentWrapper from "@/app/_components/ContentWrapper/ContentWrapper"
import FranchiseHighlights from "@/app/_components/FranchiseHighlights/FranchiseHighlights";

import ChurroMouth from '@/app/_assets/images/churro-mouth.webp'
import AboutCollage from '@/app/_assets/images/about-collage.webp'
import Smile from '@/app/_assets/images/smilechurros.webp'

import styles from './about.module.scss'

export default function AboutUsPage() {
  return (
    <ContentWrapper>
      <div className={`flex flex-col-reverse justify-around items-center gap-8 flex-col lg:flex-row py-8 mt-4 box-shadow ${styles.heroContainer}`}>
        <div>
          <Image
            src={Smile}
            alt="Twist & Buckle About"
            width={512}
            height={512}
          />
        </div>
        <div className="text-center lg:text-left">
          <h3>TWIST & BUCKLE</h3>
          <h1 className="uppercase">Playfully<br />Traditional,<br /><span className="brand-color">Uniquely Twist & Buckle</span></h1>
          <h2>Only the finest ingredients, the best churro machines in the world, and a commitment to making
every guest smile – that’s the Twist & Buckle way.</h2>
        </div>
      </div>
      <section className="flex flex-col lg:flex-row items-center">
        <div className={`${styles.OurStory} text-left lg:text-right`}>
          <h4>OUR<br /><span className="brand-color">STORY</span></h4>
          <p className="mb-4">From two best friends with  roots in South America comes Hong Kong’s first-ever contemporary  churrería. Each churro handcrafted and different (but equally as  delicious) than the next, we serve them freshly made and cinnamon-dusted with a crisp, doughy, and piping hot finish.</p>
          <p>This beloved, sweet treat pays homage to our founders’ favorite childhood  snack, where each bite will transport you to the streets of South  America. Here, you can guarantee our churros are just as authentic as  the ones they had growing up.</p>
        </div>
        <Image
          src={ChurroMouth}
          alt="Twist & Buckle About"
          width={707}
          height={606}
          className="hidden lg:block"
        />
      </section>
      <section className="flex flex-col lg:flex-row items-center gap-24">
        <Image
          src={AboutCollage}
          alt="Twist & Buckle About"
          width={564}
          height={632}
        />
        <div className={`${styles.OurIngredients}`}>
          <h4>Only the <span className="brand-color">BEST</span></h4>
          <p className="mb-4">ingredients are used here at Twist & Buckle, and each  loop of dough is cooked in a state-of-the art, imported José Luis Blanco machine – the Ferrari of churro-makers. The care and attention to both  ingredients and preparation are a testament to our passion for  authentically made churros, presented with a ‘Twist’.</p>
        </div>
      </section>
      <FranchiseHighlights />
    </ContentWrapper>
  )
}