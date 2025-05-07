import styled from 'styled-components'
import { cores } from '../../styled'

export const ImgCategoria = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 25px;
  width: 100%;
  height: 280px;
  margin-bottom: 56px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
`

export const ContentContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

export const Head = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Text = styled.p`
  font-size: 18px;
  color: ${cores.rosa};
  font-weight: bold;
`
export const ButtonCart = styled.button`
  font-size: 18px;
  background-color: transparent;
  border: none;
  color: ${cores.rosa};
  font-weight: bold;
  cursor: pointer;
`

export const Description = styled.p`
  margin-top: 24px;
  font-size: 32px;
  margin-top: 24px;
  color: #fff8;
`

export const Title = styled.p`
  margin-top: 130px;
  margin-bottom: 32px;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`
