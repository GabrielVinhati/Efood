import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#fff',
  rosa: '#E66767',
  offWhite: '#ffebd9',
  preto: '#000'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif
  }

  body {
    background-color: ${cores.branca};
    color: ${cores.rosa}
}
`

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}
