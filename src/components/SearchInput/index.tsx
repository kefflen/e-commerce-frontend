import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container } from './styled'

export function SearchInput() {
  return (
    <Container>
      <input 
        placeholder='Search products here...'
      />
      <button
        onClick={() => console.log('clicked')}
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </Container>
  )
}
