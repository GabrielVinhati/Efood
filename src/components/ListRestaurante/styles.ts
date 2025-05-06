import styled from 'styled-components'

export const Container = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
`

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
`
