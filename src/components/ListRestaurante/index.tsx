import Restaurante from '../Restaurante'
import { Container, Grid } from './styles'

const ListRestaurante = () => (
  <>
    <Container>
      <Grid>
        <Restaurante />
        <Restaurante />
        <Restaurante />
      </Grid>
    </Container>
  </>
)

export default ListRestaurante
