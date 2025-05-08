export type product = {
  id: number
  price: number
}

export type PurchasePayload = {
  products: product[]
  delivery: {
    name: string
    local: {
      address: string
      city: string
      cep: string
      number: string
      complement?: string
    }
  }
  payment: {
    card: {
      nameCard: string
      numberCard?: string
      codeCard?: number
      validation?: {
        monthCard: number
        yearCard: number
      }
    }
  }
}

export type Opçao = {
  find(arg0: (item: { id: string | undefined }) => boolean): Opçao
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: CardapioItem[]
}

export type CardapioItem = {
  number: unknown
  name: unknown
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
