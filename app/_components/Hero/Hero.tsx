import styles from './hero.module.scss'
import Michelin from './Michelin'
import Image from 'next/image'

import churro from '@/app/_assets/images/tb-churro.webp'
import Button from '@/app/_components/Button/Button'

export default function Hero() {
  return (
    <div className={`${styles.cloudShape} box-shadow flex flex-col lg:flex-row items-center`}>
        <div className={styles.introContainer}>
          <h3 className={styles.firstTitle}>TWIST & BUCKLE</h3>
          <h1 className={`text-4xl font-bold ${styles.mainTitle}`}>WHERE CHURROS<br />GET THEIR TWIST</h1>
          <h2 className={styles.subtitle}>Bringing smiles and sweetness across Asia, and soon, your city.</h2>
          <div>
            <Button href="/franchises">FRANCHISE WITH US</Button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={churro}
            width={552}
            height={571}
            alt="Churro"
          />
      </div>
      <Michelin />
    </div>
  )
}