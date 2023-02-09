import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faCartShopping, faRotate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SearchInput } from '../SearchInput'
import { CategoriesMenu, Container, Content, HeaderRow, IconNavItem } from './styled'

export function Header() {
  return (
    <Container className='secondary'>
      <HeaderRow className='row' id='top-header'>
        <Content>
          <p>Free Shipping Over $100 Free Returns</p>
          <p className='hotline-tel'>
              Hotline: 
            <a href='tel:'> (55) 99 99999-9999</a>
          </p>
        </Content>
      </HeaderRow>
      <HeaderRow className='middle-header'>
        <Content>
          <h1>E-Commerce</h1>
          <SearchInput />
          <IconNavItem>
            <FontAwesomeIcon icon={faRotate} />
              Compare <br /> Products
          </IconNavItem>
          <IconNavItem>
            <FontAwesomeIcon icon={faHeart} />
              Favourite <br /> Wishlist
          </IconNavItem>
          <IconNavItem>
            <FontAwesomeIcon icon={faUser} />
              Log in <br /> My Account
          </IconNavItem>
          <IconNavItem>
            <FontAwesomeIcon icon={faCartShopping} />
          </IconNavItem>
        </Content>
      </HeaderRow>
      <HeaderRow className='bottom-header' id='bottom-header'>
        <Content>
          <CategoriesMenu>
            <FontAwesomeIcon icon={faBars} />
              SHOP CATEGORIES
          </CategoriesMenu>
          <nav>
            <a>HOME</a>
            <a>OUR STORE</a>
            <a>BLOGS</a>
            <a>CONTACT</a>
          </nav>
        </Content>
      </HeaderRow>
    </Container>
  )
}
