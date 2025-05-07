import styled from 'styled-components'
import { cores } from '../../styled'

export const Item = styled.div`
  padding: 8px;
  width: 320px;
  height: 400px;
  background-color: ${cores.rosa};
  margin: 20px 0;
  border-radius: 5px;

  img {
    width: 304px;
    height: 167px;
    border-radius: 5px;
  }
`
export const Title = styled.p`
  padding-top: 8px;
  font-size: 16px;
  font-weight: bold;
  color: ${cores.branca};
`

export const Description = styled.div`
  padding: 8px 0;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.branca};
`
export const Specification = styled.button`
  margin: 8px 0;
  width: 304px;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${cores.offWhite};
  color: ${cores.rosa};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
