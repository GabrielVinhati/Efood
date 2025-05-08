import { Container, Sidebar } from './styles'

type Props = {
  children: JSX.Element | JSX.Element[]
}

const Card = ({ children }: Props) => {
  return (
    <Container isOverlay>
      <Sidebar>
        <div className="form">{children}</div>
      </Sidebar>
    </Container>
  )
}

export default Card
