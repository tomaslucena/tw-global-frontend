import Button from '@/app/_components/Button/Button';
import ContentWrapper from '@/app/_components/ContentWrapper/ContentWrapper';
import Image from 'next/image'
import Logo from '@/app/_assets/images/icono.webp'
import Step1 from '@/app/_assets/images/step1.webp'
import Step2 from '@/app/_assets/images/step2.webp'
import Step3 from '@/app/_assets/images/step3.webp'
import Step4 from '@/app/_assets/images/step4.webp'
import Step5 from '@/app/_assets/images/step5.webp'

import styles from './franchises.module.scss'

export default function FranchisesPage() {
  return (
    <ContentWrapper>
      <div className={`flex justify-around items-center gap-8 flex-col lg:flex-row py-8 mt-4 box-shadow ${styles.franchiseHeroContainer}`}>
        <div className={styles.franchiseHero}>
          <h3>FRANCHISES</h3>
          <h1>STRUCTURED<br />BUSINESS DEVELOPMENT<br />PLANS</h1>
          <h2>We plan every details of the journey with an extensive dig into the market we are going to tackle.</h2>
          <Button href="/franchises/apply" size="md">START MY APPLICATION</Button>
        </div>
        <div>
          <Image
            src={Logo}
            alt="Twist & Buckle Franchises"
          />
        </div>
      </div>
      <section className={styles.franchiseProcess}>
        <h3 className='text-center'>YOUR PATH TO CHURRO STARDOM</h3>
        <p className='home-subtitle text-center'>Partnering with us means joining a supportive, passionate team that will be with you every step of the way.</p>
        <ul>
          <li>
            <div className={`${styles.franchiseBox} box-shadow`}>
              <div>
                <Image
                  src={Step1}
                  alt="Step 1"
                  width={250}
                  height={400}
                />
              </div>
            </div>
            <div>
              <h6>STEP 1</h6>
              <h4>APPLY ONLINE</h4>
              <p>Tell us about yourself and your market.</p>
            </div>
          </li>
          <li className='flex-row-reverse text-right'>
            <div className={`${styles.franchiseBox} ${styles.franchiseBox2} box-shadow`}>
              <div className={styles.imageWrapperOpposite}>
                <Image
                  src={Step2}
                  alt="Step 2"
                  width={250}
                  height={400}
                />
              </div>
            </div>
            <div>
              <h6>STEP 2</h6>
              <h4>Business Planning</h4>
              <p>Work with our team to craft your location’s success plan.</p>
            </div>
          </li>
          <li>
            <div className={`${styles.franchiseBox} ${styles.franchiseBox3} box-shadow`}>
              <div>
                <Image
                  src={Step3}
                  alt="Step 3"
                  width={250}
                  height={400}
                />
              </div>
            </div>
            <div>
              <h6>STEP 3</h6>
              <h4>FINANCIAL REVIEW</h4>
              <p>We’ll make sure your plan and resources align for a strong start.</p>
            </div>
          </li>
          <li className='flex-row-reverse text-right'>
            <div className={`${styles.franchiseBox} ${styles.franchiseBox4} box-shadow`}>
              <div className={styles.imageWrapperOpposite}>
                <Image
                  src={Step4}
                  alt="Step 4"
                  width={250}
                  height={400}
                />
              </div>
            </div>
            <div>
              <h6>STEP 4</h6>
              <h4>APPROVAL</h4>
              <p>We’ll make sure your plan and resources align for a strong start.</p>
            </div>
          </li>
          <li>
            <div className={`${styles.franchiseBox} ${styles.franchiseBox5} box-shadow`}>
              <div>
                <Image
                  src={Step5}
                  alt="Step 5"
                  width={250}
                  height={400}
                />
              </div>
            </div>
            <div>
              <h6>STEP 5</h6>
              <h4> Lease & Launch</h4>
              <p>Lock in your location, prepare for opening day, and let’s get frying.</p>
            </div>
          </li>
        </ul>
      </section>
      <section className={`${styles.ready} box-shadow`}>
        <h3 className='text-center mb-4'>READY TO START YOUR OWN?</h3>
        <div className='text-center'>
          <Button href="/franchises/apply" size="md">START MY APPLICATION</Button>
        </div>
      </section>
    </ContentWrapper>
  );
} 