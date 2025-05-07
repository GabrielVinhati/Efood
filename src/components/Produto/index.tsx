import { Dispatch, SetStateAction } from 'react'
import { Specification, Description, Item, Title } from './styles'
import { CardapioItem } from '../../types'

export type ProdutoProps = {
  SetModalVisible: Dispatch<SetStateAction<boolean>>
  cardapio: CardapioItem
}

const Produto = ({ SetModalVisible, cardapio }: ProdutoProps) => {
  const limitText = (text: string, maxlength: number) => {
    return text.length > maxlength ? `${text.substring(0, maxlength)}...` : text
  }

  return (
    <Item>
      {cardapio && (
        <>
          <img src={cardapio.foto} alt={cardapio.nome} />
          <div>
            <Title>{cardapio.nome}</Title>
            <Description>{limitText(cardapio.descricao, 250)}</Description>
            <Specification onClick={() => SetModalVisible(true)}>
              Especificação do produto
            </Specification>
          </div>
        </>
      )}
    </Item>
  )
}

export default Produto
