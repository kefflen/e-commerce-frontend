import {
  Container,
  Content,
  Image,
} from './styled'


type props = {
  img: string
  children: React.ReactNode
}

export function BannerCard({
  img, children
}: props) {
  return (
    <Container>
      <Image src={img} alt="Cat Banner" />
      <Content>
        {children}
      </Content>
    </Container>
  )
}
