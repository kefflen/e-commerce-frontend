import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 1em;
  width: 100%;
  height: 100%;
  box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.2);
`

export const Image = styled.img`
  z-index: 1;
  position: absolute;
  width: 100%;
`

export const Content = styled.div`
  position: absolute;
  z-index: 2;
  padding: 35px 20px;
  width: 60%;
`
