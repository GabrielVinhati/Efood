import { useState, useEffect } from 'react'
import Logo from '../../assets/images/logo.png'
import Fundo from '../../assets/images/fundo.png'
import {
  ButtonCart,
  ContentContainer,
  Description,
  Head,
  ImgCategoria,
  Text,
  Title
} from './styles'
import { Container } from '../ListRestaurante/styles'
import { Opçao } from '../../types'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

type ContentBanner = {
  content?: Opçao
}

const Banner = ({ content: initialContent }: ContentBanner) => {
  const [content, setContent] = useState<Opçao | undefined>(initialContent)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const { id } = useParams()

  const dispatch = useDispatch()
  const openCart = () => {
    dispatch(open())
  }

  useEffect(() => {
    if (!initialContent) {
      fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
        .then((res) => res.json())
        .then((data: Opçao) => setContent(data))
        .catch((err) => console.error('Erro ao carregar dados:', err))
    }
  }, [initialContent, id])

  return (
    <>
      <div>
        <Head style={{ backgroundImage: `url(${Fundo})` }}>
          <Container>
            <Text>Restaurante</Text>
            <img src={Logo} alt="Logotipo" />
            <ButtonCart onClick={openCart}>
              {items.length} produto(s) no carrinho
            </ButtonCart>
          </Container>
        </Head>
      </div>
      <div>
        {content ? (
          <ImgCategoria style={{ backgroundImage: `url(${content.capa})` }}>
            <ContentContainer>
              <Description>{content.tipo}</Description>
              <Title>{content.titulo}</Title>
            </ContentContainer>
          </ImgCategoria>
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </>
  )
}

export default Banner
