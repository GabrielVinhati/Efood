import Hioki from '../../assets/images/Hioki Sushi.png'
import VitaTrattoria from '../../assets/images/Vita Trattoria.png'
import Nota from '../../assets/images/nota.png'
import Nota2 from '../../assets/images/nota 2.png'
import {
  BtnMore,
  Description,
  ImgContainer,
  Item,
  TagDestaque,
  TagNacionalidade,
  Title
} from './styles'
import { Link } from 'react-router-dom'

const Product = () => (
  <>
    <Item>
      <ImgContainer>
        <img src={Hioki} alt="HiokiSushi" />
        <TagDestaque>Destaque da semana</TagDestaque>
        <TagNacionalidade>Japonesa</TagNacionalidade>
      </ImgContainer>
      <Title>
        <h3>Hioki Sushi</h3>
        <img src={Nota} alt="NotaPublico" />
      </Title>
      <div>
        <Description>
          Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
          frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
          rápida, embalagens cuidadosas e qualidade garantida.Experimente o
          Japão sem sair do lar com nosso delivery!
        </Description>
        <BtnMore>
          <Link to="/categories">Saiba mais </Link>
        </BtnMore>
      </div>
    </Item>
    <Item>
      <ImgContainer>
        <img src={VitaTrattoria} alt="Vita Trattoria" />
        <TagNacionalidade>Italiana</TagNacionalidade>
      </ImgContainer>
      <Title>
        <h3>Vita Trattoria</h3>
        <img src={Nota2} alt="NotaPublico" />
      </Title>
      <div>
        <Description>
          A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!
          Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis,
          tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e
          sabor inesquecível. Peça já!
        </Description>
        <BtnMore>
          <Link to="/categories">Saiba mais </Link>
        </BtnMore>
      </div>
    </Item>
  </>
)

export default Product
