import Produto from '../Produto'
import { useParams } from 'react-router-dom'
import {
  ContainerCardapio,
  Description,
  GridCardapio,
  Modal,
  ModalContent
} from './styles'
import Close from '../../assets/images/close.png'
import { useState, useEffect } from 'react'
import { CardapioItem } from '../../types'
import Cart from '../Cart'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { formataPreco } from '../../styled'

const Cardapio = () => {
  const { id } = useParams()
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedItem, setSelectedItem] = useState<CardapioItem | null>(null)
  const [cardapio, setCardapio] = useState<CardapioItem[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.cardapio) {
          setCardapio(res.cardapio)
        } else {
          console.error('Resposta inesperada da API:', res)
          setCardapio([])
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error)
        setCardapio([])
      })
  }, [id])

  const handleShowModal = (item: CardapioItem) => {
    setSelectedItem(item)
    setModalVisible(true)
  }

  const dispatch = useDispatch()

  const addToCart = () => {
    if (selectedItem) {
      dispatch(add(selectedItem))
      dispatch(open())
      setModalVisible(false)
    }
  }

  return (
    <>
      <ContainerCardapio>
        <GridCardapio>
          {Array.isArray(cardapio) &&
            cardapio.map((item) => (
              <Produto
                key={item.id}
                cardapio={item}
                SetModalVisible={() => handleShowModal(item)}
              />
            ))}
        </GridCardapio>
      </ContainerCardapio>
      <Cart />
      {selectedItem && (
        <Modal className={modalVisible ? 'visible' : ''}>
          <ModalContent>
            <div>
              <img src={selectedItem.foto} alt="Prato selecionado" />
            </div>
            <Description>
              <div>
                <h4>{selectedItem.nome}</h4>
                <img
                  src={Close}
                  alt="close modal"
                  onClick={() => setModalVisible(false)}
                />
              </div>
              <p>
                {selectedItem.descricao} <br /> <br />{' '}
                {`Serve: de ${selectedItem.porcao}`}
              </p>
              <button onClick={addToCart}>
                Adicionar ao carrinho - {`${formataPreco(selectedItem.preco)}`}
              </button>
            </Description>
          </ModalContent>
          <div className="overlay" onClick={() => setModalVisible(false)}></div>
        </Modal>
      )}
    </>
  )
}

export default Cardapio
