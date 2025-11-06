import Image from "next/image"
import styles from "./hero.module.scss"
import MichelinIcon from "@/app/_assets/images/michelin.webp"


export default function Michelin() {
  return (
    <div className={styles.michelin}>
      <svg className={styles.cornerBottomLeft} xmlns="http://www.w3.org/2000/svg" width="38.44" height="28.44" viewBox="0 0 38.44 28.44" fill="#FFF">
        <defs></defs>
        <path d="M38.44,0h-10c.08.85.22,1.96,0,3.5-.03,13.78-11.21,24.95-25,24.95H0h38.44V0Z"/>
      </svg>
      <svg className={styles.cornerTopRight} xmlns="http://www.w3.org/2000/svg" width="28.44" height="38.44" viewBox="0 0 28.44 38.44 " fill="#FFF">
        <defs></defs>
        <path d="M0,38.44c0-3.33,0-6.67,0-10,.85.08,1.96.22,3.5,0,13.78-.03,24.95-11.21,24.95-25V0s0,38.44,0,38.44H0Z"/>
      </svg>
      <div className="pl-8">
        <h5 className="text-white text-bold">MICHELING GUIDE</h5>
        <div className="text-white text-xl">{ new Date().getFullYear() - 1 } & { new Date().getFullYear() }</div>
      </div>
      <Image
        src={MichelinIcon}
        alt="Michelin Star"
        width={110}
        height={110}
      />
    </div>
  )
}