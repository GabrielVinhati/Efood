import { CartItem } from '../src/store/reducers/cart'

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: CartItem[]): number => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return accumulator + currentItem.preco
    }
    return accumulator
  }, 0)
}
