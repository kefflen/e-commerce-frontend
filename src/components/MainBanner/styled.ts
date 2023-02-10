import styled from 'styled-components'

export const Container = styled.div`
  padding: 3em 0em 6em 0em;
  gap: 2em;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.paper};
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
`

export const LargeBanner = styled.div`
  width: 700px;
  height: 450px;
`

export const SmallBannersGrid = styled.div`
  display: grid;
  grid-template-columns: 350px 350px;
  gap: 1em;
  font-size: 0.75em;
`

export const Info = styled.h4`
  font-size: 1.5em;
`

export const ProductName = styled.h5`
  font-size: 2em;
  margin: 0.5em 0;
`

export const PriceInfo = styled.p`
  font-weight: 600;
`
