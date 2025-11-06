import { loadShops } from '@/app/_lib/queries';
import ContentWrapper from '@/app/_components/ContentWrapper/ContentWrapper';
import ShopsDisplay from '@/app/_components/ShopsDisplay/ShopsDisplay';
import FranchiseHighlights from '@/app/_components/FranchiseHighlights/FranchiseHighlights';

export default async function ShopsPage() {
  const shops = await loadShops();
  return (
    <ContentWrapper>
      <section>
        <h3 className='uppercase'>From Asia, With Love (and Churros)</h3>
        <p className="mb-8 home-subtitle">We’ve been sharing our churros with the world since day one, opening doors in vibrant cities and bringing our playful, artisanal touch to every shop.</p>
        <ShopsDisplay mode="grid" shops={shops} />
      </section>
      <FranchiseHighlights />
    </ContentWrapper>
  );
}