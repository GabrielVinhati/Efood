import Pizza from '../../assets/images/PizzaMarguerita.png'
import { ButtonAddCar, Description, Item, Title } from './styles'

const ProductItaly = () => (
  <Item>
    <img src={Pizza} alt="Pizza Marguerita" />
    <div>
      <Title>Pizza Marguerita</Title>
      <Description>
        A clássica Marguerita: molho de tomate suculento, mussarela derretida,
        manjericão fresco e um toque de azeite. Sabor e simplicidade!
      </Description>
      <ButtonAddCar>Adicionar ao carrinho</ButtonAddCar>
    </div>
  </Item>
)

export default ProductItaly
