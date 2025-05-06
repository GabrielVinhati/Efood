import styled from 'styled-components'
import { cores } from '../../styled'

export const Home = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  margin-bottom: 80px;
`

export const Text = styled.p`
  width: 539px;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: ${cores.rosa};
`

export const LogoImage = styled.img`
  max-width: 200px;
  margin-bottom: 138px;
`
