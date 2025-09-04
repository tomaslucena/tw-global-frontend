import styles from './hero.module.scss'
import Michelin from './Michelin'
import Image from 'next/image'

import churro from '@/app/_assets/images/tb-churro.webp'
import Button from '@/app/_components/Button/Button'

export default function Hero() {
  return (
    <div className={`${styles.cloudShape} flex items-center`}>
        <div>
          <h3>TWIST & BUCKLE</h3>
          <h1 className="text-4xl font-bold">WHERE CHURROS<br />GET THEIR TWIST</h1>
          <h2>Bringing smiles and sweetness across Asia, and soon, your city.</h2>
          <Button>FRANCHISE WITH US</Button>
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