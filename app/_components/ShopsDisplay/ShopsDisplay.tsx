import * as Types from '@/app/_lib/types'
import SwiperSlider from '@/app/_components/Swiper/SwiperSlider';
import Button from '@/app/_components/Button/Button';
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'
import InstagramIcon from '@/app/_assets/images/social/instagram.svg'
import Icon from '@/app/_assets/images/icono.webp'

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

export default function ShopsSlider({ shops, mode = 'slider' }: { 
  shops: Types.Shop[] | null,
  mode?: 'grid' | 'slider'
}) {
  return (
    <>
      {
        mode === 'slider'
        ?
        shops && shops.length > 0 && (
          <SwiperSlider initializer=".swiper-rest" settings={sliderSettings} className={`swiper-rest ${styles.restauransList}`} controlsClass="hidden">  
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
                  <div className="p-4">
                  <h5 className='uppercase mb-2'>{shop.country.name}</h5>
                  <p className='mb-4'>{shop.short_description['en']}</p>
                  <div className='flex justify-between'>
                    <div className='flex gap-2'>
                      <Button href={`/shops/${shop.slug}`} size="sm">KNOW MORE</Button>
                      <Button href={shop.website || 'https://www.twistandbuckle.com'} outlined size="sm">VISIT BRANCH</Button>
                    </div>
                    <Link
                      href={shop.instagram || 'https://www.instagram.com/twistandbucklehk'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twist & Buckle Instagram"
                      ><span className='flex items-center gap-1 font-semibold'><Image src={InstagramIcon} width={30} height={30} alt="Twist & Buckle Instagram" /> FOLLOW</span></Link>
                  </div>
                  </div>
                </div>
              )
            }
          </SwiperSlider>
        )
        :
        shops && shops.length > 0 && (
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            {
              shops.map((shop) => (
                <div className={``} key={shop.id}>
                  <div className={`${styles.shopImageWrapper} ${styles.gridDisplay}`}>
                    <Image
                      src={shop.cover_image}
                      alt={shop.name['en'] || 'Shop Image'}
                      fill
                      sizes={'(max-width: 1024px) 100vw, (max-width: 1280px) 33vw, 33vw'}
                    />
                  </div>
                  <div className="p-4">
                  <h5 className='uppercase mb-2'>{shop.country.name}</h5>
                  <p className='mb-4'>{shop.short_description['en']}</p>
                  <div className='flex justify-between'>
                    <div className='flex gap-2'>
                      <Button href={`/shops/${shop.slug}`} size="md">KNOW MORE</Button>
                      <Button href={shop.website || 'https://www.twistandbuckle.com'} outlined size="md">VISIT BRANCH</Button>
                    </div>
                    <Link
                      href={shop.instagram || 'https://www.instagram.com/twistandbucklehk'}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twist & Buckle Instagram"
                      ><span className='flex items-center gap-1 font-semibold'><Image src={InstagramIcon} width={30} height={30} alt="Twist & Buckle Instagram" /> FOLLOW</span></Link>
                  </div>
                  </div>
                </div>
              ))
            }
            <div className={``}>
              <div className={`${styles.shopImageWrapper} ${styles.gridDisplay}  ${styles.yourCity}`}>
                <Image
                  src={Icon}
                  alt={'Shop Icon'}
                  fill
                  sizes={'(max-width: 1024px) 100vw, (max-width: 1280px) 33vw, 33vw'}
                />
              </div>
              <div className="p-4">
                <h5 className='uppercase mb-2'>Your City, Next?</h5>
                <p className='mb-4'>Join us and bring the Twist & Buckle experience to your neighborhood.</p>
                <div className='flex justify-between'>
                  <div className='flex gap-2'>
                    <Button href={`/franchises`} size="md">FRANCHISES</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}