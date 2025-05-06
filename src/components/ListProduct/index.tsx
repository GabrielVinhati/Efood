import Product from '../Product'
import { Container, Grid } from './styles'

const ListProduct = () => (
  <>
    <Container>
      <Grid>
        <Product />
        <Product />
        <Product />
      </Grid>
    </Container>
  </>
)

export default ListProduct
