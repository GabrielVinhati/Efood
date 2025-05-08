import styled from 'styled-components'
import { cores } from '../../../styled'

export const Title = styled.h1`
  color: ${cores.offWhite};
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: bold;
`

export const Message = styled.p`
  color: ${cores.offWhite};
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 24px;
`

export const Row = styled.div`
  display: block;
  margin-bottom: 16px;
`

export const InputGroup = styled.div`
  display: block;

  label,
  small {
    color: ${cores.offWhite};
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }

  input {
    background-color: ${cores.offWhite};
    border: 1px solid ${cores.offWhite};
    height: 32px;
    width: 100%;
    margin-bottom: 8px;
    border-radius: 3px;
  }

  &.areaFlex {
    display: flex;
    gap: 16px;

    div {
      flex: 1;
    }
  }
`
