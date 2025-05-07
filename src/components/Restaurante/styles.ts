import styled from 'styled-components'
import { cores } from '../../styled'

export const Item = styled.li`
  max-width: 472px;
  border: 1px ${cores.rosa} solid;
  list-style: none;
  margin-bottom: 48px;

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px;
  font-weight: bold;
  font-size: 18px;
  color: ${cores.rosa};

  div {
    display: flex;
    align-items: center;
  }

  img {
    margin-left: 8px;
    width: 21px;
    height: 20px;
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
  margin: 10px;
  width: 82px;
  height: 24px;
  background-color: ${cores.rosa};
  color: ${cores.branca};
  font-size: 14px;
  cursor: pointer;
  border: none;
`
