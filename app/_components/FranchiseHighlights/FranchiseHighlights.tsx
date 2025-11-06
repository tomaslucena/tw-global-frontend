import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.scss'
import ChurroUpDown from '@/app/_assets/images/churro-updown.png'

export default function FranchiseHighlights() {
  return (
    <section className="text-center">
      <h3>A PROVEN RECIPE FOR SWEET SUCCESS</h3>
      <p className="mb-16 home-subtitle">We’ve opened successful shops in diverse markets with a model that’s as deliciously structured as our churros.</p>
      <div className={styles.container}>
        {/* Left Card */}
        <div className={`${styles.card} ${styles.left}`}>
          <Image src={ChurroUpDown} width={185} height={208} alt="Franchise Icon" />
          <h5>FULL TRAINING</h5>
          <p>From day-to-day operations to customer magic, we've got you covered.</p>
          <Link className={styles.button} href="/franchises">LEARN MORE</Link>
        </div>
        
        {/* Middle Card - default green */}
        <div className={`${styles.card} ${styles.middle}`}>
          <Image src={ChurroUpDown} width={185} height={208} alt="Franchise Icon" />
          <h5>STRUCTURED BUSINESS PLAN</h5>
          <p>Tailored market strategies designed to set you up for success.</p>
          <Link className={styles.button} href="/franchises">LEARN MORE</Link>
        </div>
        
        {/* Right Card */}
        <div className={`${styles.card} ${styles.right}`}>
          <Image src={ChurroUpDown} width={185} height={208} alt="Franchise Icon" />
          <h5>ALL COLLATERALS DESIGNED</h5>
          <p>Menus, marketing materials, and brand assets ready for you to launch in style.</p>
          <Link className={styles.button} href="/franchises">LEARN MORE</Link>
        </div>
      </div>
    </section>
  )
}