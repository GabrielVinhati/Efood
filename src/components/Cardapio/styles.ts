import styled from 'styled-components'
import { cores } from '../../styled'

export const ContainerCardapio = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1024px;
  width: 100%;
  margin-top: 56px;
  margin-bottom: 120px;
  margin: 0 auto;
`

export const GridCardapio = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  justify-items: center;
  margin-bottom: 120px;
`
export const Modal = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`

export const ModalContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  max-width: 1024px;
  max-height: 344px;
  padding: 32px;
  color: ${cores.branca};
  background-color: ${cores.rosa};
  border-radius: 5px;
  z-index: 2;

  img {
    border-radius: 5px;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }
`

export const Description = styled.div`
  margin-left: 24px;

  div {
    display: flex;
    justify-content: space-between;

    img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
  }

  button {
    margin-top: 16px;
    padding: 5px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color: ${cores.branca};
    color: ${cores.rosa};
    cursor: pointer;
  }
`
