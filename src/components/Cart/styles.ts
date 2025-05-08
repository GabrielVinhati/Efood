import styled from 'styled-components'
import { cores } from '../../styled'
import { Specification } from '../Produto/styles'
import Delete from '../../assets/images/lixo.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${cores.preto};
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  color: ${cores.offWhite};
  width: 360px;
  padding: 32px 8px 0 8px;
  z-index: 1;

  .empty-message {
    font-size: 24px;
    font-weight: bold;
    line-height: 22px;
    text-align: center;
  }
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: bold;
  margin-top: 40px;
  padding-bottom: 16px;
`

export const ItemCart = styled.li`
  display: flex;
  position: relative;
  background-color: ${cores.offWhite};
  color: ${cores.rosa};
  margin-bottom: 16px;
  width: 344px;
  height: 100px;
  padding: 8px;
  border-radius: 5px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    border-radius: 5px;
  }

  button {
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-image: url(${Delete});
    background-color: transparent;
    cursor: pointer;
  }
`

export const Description = styled.div`
  h3 {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 16px;
  }

  p {
    font-size: 14px;
    padding-bottom: 8px;
  }
`

export const DeliveryButton = styled(Specification)`
  width: 100%;
`
