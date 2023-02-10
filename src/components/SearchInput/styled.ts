import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  border-radius: 0.2em;
  overflow: hidden;

  input {
    flex: 1;
    padding: 0.75em;
    font-size: 1em;
    border: none;
    outline: none;
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary};
    width: 50px;
    border: none;
    cursor: pointer;
  }
`
