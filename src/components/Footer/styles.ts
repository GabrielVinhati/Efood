import styled from 'styled-components'
import { cores } from '../../styled'

export const Rodape = styled.div`
  width: 100%;
  height: 298px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logotipo = styled.img`
  padding: 40px;
  max-width: 200px;
`

export const RedesSociais = styled.div`
  display: flex;
  justify-content: center;
`

export const Message = styled.p`
  justify-content: center;
  margin-top: 80px;
  padding-bottom: 40px;
  font-size: 10px;
  align-items: center;
  color: ${cores.rosa};
`
