import Link from "next/link";
import Image from "next/image";

import halfLogo from '@/app/_assets/images/half-logo.webp'
import facebookIcon from '@/app/_assets/images/social/facebook.svg'
import instagramIcon from '@/app/_assets/images/social/instagram.svg'

import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="flex flex-row-reverse md:flex-row justify-between px-8 items-end md:items-center pt-8 md:pt-0 gap-4">
        <div className={styles.halfLogo}>
          <Image src={halfLogo} alt="Logo" width={333} height={380} />
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div>
            <nav>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/franchise">Franchises</Link></li>
                <li><Link href="/shops">Shops</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </div>
          <div className={`flex flex-row md:flex-col justify-start ${styles.socials}`}>
            <Link href="/">
              <Image src={instagramIcon} alt="Instagram Logo" width={50} height={50} />
            </Link>
            <Link href="/">
              <Image src={facebookIcon} alt="Facebook Logo" width={50} height={50} />
            </Link>
          </div>
        </div>
      </div>
      <div className={`flex flex-col md:flex-row justify-between items-center ${styles.legals}`}>
        <p>© {new Date().getFullYear() } Twist & Buckle. All rights reserved.</p>
        <Link href="#" title="Graphic Diversity">Brought to you by <span>GRAPHIC DIVERSITY</span></Link>
      </div>
    </footer>
  )
}