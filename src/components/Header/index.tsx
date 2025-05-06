import Fundo from '../../assets/images/fundo.png'
import Logo from '../../assets/images/logo.png'
import { Text, Home, LogoImage } from './styles'

const Header = () => (
  <Home style={{ backgroundImage: `url(${Fundo})` }}>
    <Text>
      <LogoImage src={Logo} alt="Logotipo" />
      <p>Viva experiências gastronômicas no conforto da sua casa</p>
    </Text>
  </Home>
)

export default Header
