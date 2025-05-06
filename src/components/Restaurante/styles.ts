import styled from 'styled-components'
import { cores } from '../../styled'

export const Item = styled.li`
  width: 472px;
  border: 1px ${cores.rosa} solid;
  list-style: none;
  margin-bottom: 48px;
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
  font-weight: bold;
  font-size: 18px;
  color: ${cores.rosa};

  img {
    width: 55px;
    height: 21px;
  }
`

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
`

export const TagDestaque = styled.span`
  position: absolute;
  top: 16px;
  right: 90px;
  padding: 8px;
  background-color: ${cores.rosa};
  color: white;
  font-size: 12px;
`

export const TagNacionalidade = styled.span`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px;
  background-color: ${cores.rosa};
  color: white;
  font-size: 12px;
`

export const Nota = styled.img`
  width: 55px;
  height: 21px;
`

export const Description = styled.p`
  margin: 8px;
  font-size: 14px;
  color: ${cores.rosa};
`

export const BtnMore = styled.button`
  margin: 8px;
  padding: 5px;
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: 14px;
  border: none;

  a {
    color: inherit;
    text-decoration: none;
  }
`
