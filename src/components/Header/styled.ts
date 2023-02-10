import styled from 'styled-components'

export const HeaderRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em;

  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

export const Content = styled.div`
  display: flex;
  gap: 0.5em;
  flex: 1;
  max-width: 1200px;
`

export const Container = styled.header`
  #top-header {
    ${Content} {
      justify-content: space-between;
    }
  }

  #bottom-header {
    background-color: ${({ theme }) => theme.colors.lightSecondary};
    ${Content} {
      display: flex;
      gap: 5em;

      nav {
        display: flex;
        gap: 1em;

        a {
          cursor: pointer;
        }
      }
    }
  }
`

export const IconNavItem = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.5em;
  svg {
    height: 1.75em;
  }
`

export const CategoriesMenu = styled.div`
  display: flex;
  gap: 0.5em;
  font-weight: bold;
  cursor: pointer;
`
