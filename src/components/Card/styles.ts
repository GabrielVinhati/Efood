import styled from 'styled-components'
import { cores } from '../../styled'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color: #000;
`

export const Container = styled.div<{ isOverlay: boolean }>`
  display: flex;
  position: fixed;
  justify-content: flex-end;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: ${({ isOverlay }) => (isOverlay ? 'rgba(0, 0, 0, 0.8)' : 'none')};
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  max-height: 1624px;
  height: 100%;
  padding: 32px 8px 0 7px;
  background-color: ${cores.rosa};

  .form {
    margin-bottom: 24px;
  }
`
