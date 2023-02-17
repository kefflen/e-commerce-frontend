import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

export const Container = styled.div`
  border-radius: 10px;
  overflow: hidden;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.paper};
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
`

export const ProductImage = styled.img`
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  /* mix-blend-mode: multiply; */
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`

export const FavoriteButton = styled.button``

export const FavoriteIcon = styled(FontAwesomeIcon)`
  position: absolute;
  transform: scale(1.3);
  right: 1em;
  top: 1em;
  z-index: 2;

  &.active {
    color: red;
  }
`

export const ProductInfo = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`

export const Brand = styled.h4``

export const ProductName = styled.h3`
  font-size: 1.5em;
`
