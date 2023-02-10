import { BannerCard } from '../BannerCard'
import {
  Container,
  PriceInfo,
  Info,
  LargeBanner,
  ProductName,
  SmallBannersGrid,
} from './styled'
import mainbanner from '../../assets/main-banner-1.jpg'
import catbanner1 from '../../assets/catbanner-01.jpg'
import catbanner2 from '../../assets/catbanner-02.jpg'
import catbanner3 from '../../assets/catbanner-03.jpg'
import catbanner4 from '../../assets/catbanner-04.jpg'

export function MainBanner() {
  return (
    <Container>
      <LargeBanner>
        <BannerCard img={mainbanner}>
          <Info className="attention-text">SUPERCHARGED FOR PROS.</Info>
          <ProductName>iPad S13+ Pro.</ProductName>
          <PriceInfo>From $999.00 or $41.62/mo.</PriceInfo>
        </BannerCard>
      </LargeBanner>
      <SmallBannersGrid>
        <BannerCard img={catbanner1}>
          <Info className="attention-text">BEST SAKE.</Info>
          <ProductName>iPad S13+ Pro.</ProductName>
          <PriceInfo>From $999.00 or $41.62/mo.</PriceInfo>
        </BannerCard>
        <BannerCard img={catbanner2}>
          <Info className="attention-text">NEW ARRIVAL.</Info>
          <ProductName>iPad S13+ Pro.</ProductName>
          <PriceInfo>From $999.00 or $41.62/mo.</PriceInfo>
        </BannerCard>
        <BannerCard img={catbanner3}>
          <Info className="attention-text">NEW ARRIVAL.</Info>
          <ProductName>iPad S13+ Pro.</ProductName>
          <PriceInfo>From $999.00 or $41.62/mo.</PriceInfo>
        </BannerCard>
        <BannerCard img={catbanner4}>
          <Info className="attention-text">NEW ARRIVAL.</Info>
          <ProductName>iPad S13+ Pro.</ProductName>
          <PriceInfo>From $999.00 or $41.62/mo.</PriceInfo>
        </BannerCard>
      </SmallBannersGrid>
    </Container>
  )
}
