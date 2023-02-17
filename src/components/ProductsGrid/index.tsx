import { ContentArea } from '../ContentArea'
import { ProductCard } from '../ProductCard'
import { Container, Grid, GridTitle } from './styled'
import { product } from '../../types/product'
import { useState } from 'react'
import { productsMock } from '../../mocks/productsMock'


export function ProductsGrid() {
  const [products, setProducts] = useState<product[]>(productsMock)

  return (
    <ContentArea>
      <Container>
        <GridTitle>Our popular products</GridTitle>
        <Grid>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      </Container>
    </ContentArea>
  )
}
