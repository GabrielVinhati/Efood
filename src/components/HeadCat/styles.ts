import styled from 'styled-components'
import { cores } from '../../styled'

export const ContentContainer = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
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

export const ImgModelo = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 25px;
  width: 100%;
  height: 280px;
  margin-bottom: 56px;
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
