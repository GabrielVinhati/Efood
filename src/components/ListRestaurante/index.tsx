import { useEffect, useState } from 'react'
import Restaurante from '../Restaurante'
import { Container, Grid } from './styles'
import { Opçao } from '../../types'

const ListRestaurante = () => {
  const [opçoes, setOpçoes] = useState<Opçao[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setOpçoes(res))
  }, [])

  return (
    <>
      <Container>
        <Grid>
          {opçoes.map((opcao) => (
            <Restaurante key={opcao.id} restaurante={opcao} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default ListRestaurante
