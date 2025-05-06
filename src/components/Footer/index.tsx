import { Text } from '../Header/styles'
import Logo from '../../assets/images/logo.png'
import Rectangle from '../../assets/images/Rectangle 2.png'
import redesSociais from '../../assets/images/redes sociais.png'
import { Logotipo, Message, RedesSociais, Rodape } from './styles'

const Footer = () => (
  <Rodape style={{ backgroundImage: `url(${Rectangle})` }}>
    <Text>
      <Logotipo src={Logo} alt="Logotipo" />
      <RedesSociais>
        <img src={redesSociais} alt="redes sociais" />
      </RedesSociais>
      <Message>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Message>
    </Text>
  </Rodape>
)

export default Footer
