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
import { useState } from 'react'
import Checkout from '../pages/Checkout'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [showCheckout, setShowCheckout] = useState(false)

  const totalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const goToCheckout = () => {
    setShowCheckout(true)
    closeCart()
  }

  return (
    <>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        {!showCheckout && <Overlay onClick={closeCart} />}
        <Sidebar>
          {items.length > 0 ? (
            <>
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
              <DeliveryButton onClick={goToCheckout}>
                Continuar com a entrega
              </DeliveryButton>
            </>
          ) : (
            <p className="empty-message">Seu carrinho está vazio</p>
          )}
        </Sidebar>
      </CartContainer>

      {showCheckout && <Checkout onClose={() => setShowCheckout(false)} />}
    </>
  )
}

export default Cart
