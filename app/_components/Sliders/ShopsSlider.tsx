import * as Types from '@/app/_lib/types'
import SwiperSlider from '@/app/_components/Swiper/SwiperSlider';
import Button from '@/app/_components/Button/Button';
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import InstagramIcon from '@/app/_assets/images/social/instagram.svg'

const sliderSettings = {
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
  },
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      centeredSlides: false,
      spaceBetween: 40,
      slidesPerView: 3,
    },
  }
}

export default function ShopsSlider({ shops }: { shops: Types.Shop[] | null }) {
  return (
    <>
     {
      shops && shops.length > 0 && (
        <SwiperSlider initializer=".swiper-rest" settings={sliderSettings} className={`swiper-rest ${styles.restauransList}`} controlsClass="fullWidth">  
          {
            shops.map((shop) =>
              <div className={`swiper-slide ${styles._swiperSlide}`} key={shop.id}>
                <div className={styles.shopImageWrapper}>
                  <Image
                    src={shop.cover_image}
                    alt={shop.name['en'] || 'Shop Image'}
                    fill
                    sizes={'(max-width: 1024px) 100vw, (max-width: 1280px) 33vw, 33vw'}
                  />
                </div>
                <h4>{shop.country.name}</h4>
                <p>{shop.short_description['en']}</p>
                <div className='flex justify-between'>
                  <div className='flex gap-2'>
                    <Button href={`/shops/${shop.slug}`} size="sm">KNOW MORE</Button>
                    <Button href={shop.website || 'https://www.twistandbuckle.com'} outlined size="sm">VISIT BRANCH</Button>
                  </div>
                  <Link href={shop.instagram || 'https://www.instagram.com/twistandbucklehk'} target="_blank" rel="noopener noreferrer" aria-label="Twist & Buckle Instagram" className='flex items-center gap-1'><Image src={InstagramIcon} width={30} height={30} alt="Twist & Buckle Instagram" /> FOLLOW</Link>
                </div>
              </div>
            )
          }
        </SwiperSlider>
      )}
    </>
  )
}