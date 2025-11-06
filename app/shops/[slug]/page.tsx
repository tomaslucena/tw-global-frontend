import { notFound } from 'next/navigation';
import { loadShop } from '@/app/_lib/queries';
import ContentWrapper from '@/app/_components/ContentWrapper/ContentWrapper';
import Image from 'next/image';

import styles from '../shops.module.scss';
import SwiperSlider from '@/app/_components/Swiper/SwiperSlider';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ShopPage({ params }: PageProps) {
  const { slug } = await params;

  // Fetch shop data based on the slug
  const shopData = await loadShop({ slug });

  if(shopData?.error || !shopData) {
    notFound();
  }

  return (
    <ContentWrapper>
      <div className={styles.shopCover}>
        <Image
          src={shopData.cover_image}
          fill
          alt={shopData.name['en'] || 'Shop Image'}
          sizes={'(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 50vw'}
        />
        <div className={styles.coverCountry}>{shopData.country.name}</div>
      </div>
      <section className="flex">
        <div>
          <h1>{shopData.name['en']}</h1>
          <p>{shopData.description['en']}</p>
        </div>
        {
          shopData.gallery && shopData.gallery.length > 0 &&
          <SwiperSlider 
            initializer=".swiper-shop"
            settings={{
              slidesPerView: 1,
              speed: 400,
            }}
          >
            {
              shopData.gallery.map((image) =>
                <div className={`swiper-slide`} key={image.id}>
                  <Image
                    src={image.image}
                    alt={shopData.name['en'] || 'Shop Image'}
                  />
                </div>
              )
            }
          </SwiperSlider>
        }
      </section>
    </ContentWrapper>
  );
}