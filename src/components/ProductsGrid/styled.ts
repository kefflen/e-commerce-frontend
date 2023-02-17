import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  gap: 2em;
`

export const GridTitle = styled.h2`
  font-size: 2em;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
`
