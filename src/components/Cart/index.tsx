import {
  CartContainer,
  DeliveryButton,
  Description,
  ItemCart,
  Overlay,
  Price,
  Sidebar
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../styled'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const totalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <ItemCart key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <Description>
                <div>
                  <h3>{item.nome}</h3>
                  <p>{formataPreco(item.preco)}</p>
                </div>
              </Description>
              <button onClick={() => removeItem(item.id)} type="button" />
            </ItemCart>
          ))}
        </ul>
        <Price>
          <p>Valor total</p>
          <p>{formataPreco(totalPrice())}</p>
        </Price>
        <DeliveryButton>Continuar com a entrega</DeliveryButton>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
