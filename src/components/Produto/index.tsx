import { Dispatch, SetStateAction } from 'react'
import Pizza from '../../assets/images/PizzaMarguerita.png'
import { Specification, Description, Item, Title } from './styles'
import { Link } from 'react-router-dom'

type ProdutoProps = {
  SetModalVisible: Dispatch<SetStateAction<boolean>>
}

const Produto = ({ SetModalVisible }: ProdutoProps) => {
  return (
    <Item>
      <img src={Pizza} alt="Pizza Marguerita" />
      <div>
        <Title>Pizza Marguerita</Title>
        <Description>
          A clássica Marguerita: molho de tomate suculento, mussarela derretida,
          manjericão fresco e um toque de azeite. Sabor e simplicidade!
        </Description>
        <Specification>
          <Link
            to={''}
            onClick={(e) => {
              e.preventDefault()
              SetModalVisible(true)
            }}
          >
            Especificação do produto
          </Link>
        </Specification>
      </div>
    </Item>
  )
}

export default Produto
