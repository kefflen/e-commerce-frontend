import { faHeart } from '@fortawesome/free-regular-svg-icons'
import {
  Brand,
  Container,
  FavoriteIcon,
  ImageContainer,
  ProductImage,
  ProductInfo,
  ProductName,
  FavoriteButton
} from './styled'
import { useEffect, useState } from 'react'
import { product } from '../../types/product'

type props = {
  product: product
}

export function ProductCard({ product: {brand, title, img, price, isFavorited} }: props) {
  const [isFavorite, setIsFavorite] = useState(isFavorited)

  const handleIsFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <Container>
      <ImageContainer>
        <ProductImage src={img}/>
        <FavoriteButton onClick={handleIsFavorite}>
          <FavoriteIcon icon={faHeart} className={isFavorite? 'active':''}/>
        </FavoriteButton>
      </ImageContainer>
      <ProductInfo>
        <Brand className="attention-text">{brand}</Brand>
        <ProductName>{title}</ProductName>
        <p>R$ {price.toFixed(2)}</p>
      </ProductInfo>
    </Container>
  )
}
