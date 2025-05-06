import Logo from '../../assets/images/logo.png'
import Fundo from '../../assets/images/fundo.png'
import Apresentacao from '../../assets/images/imgDeFundo.png'
import { Description, Head, ImgModelo, Text, Title } from './styles'
import { Container } from '../ListProduct/styles'

const Banner = () => (
  <>
    <div>
      <Head style={{ backgroundImage: `url(${Fundo})` }}>
        <Container>
          <Text>Restaurante</Text>
          <img src={Logo} alt="Logotipo" />
          <Text>0 produto(s) no carrinho</Text>
        </Container>
      </Head>
    </div>
    <div>
      <ImgModelo style={{ backgroundImage: `url(${Apresentacao})` }}>
        <>
          <Description>Italiana</Description>
          <Title>La Dolce Vita Trattoria</Title>
        </>
      </ImgModelo>
    </div>
  </>
)

export default Banner
