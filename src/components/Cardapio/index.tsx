import Produto from '../Produto'
import {
  ContainerCardapio,
  Description,
  GridCardapio,
  Modal,
  ModalContent
} from './styles'
import Close from '../../assets/images/close.png'
import ImgModal from '../../assets/images/ImgModal.png'
import { useState } from 'react'

const Cardapio = () => {
  const [ModalVisible, SetModalVisible] = useState(false)

  return (
    <>
      <ContainerCardapio>
        <GridCardapio>
          <Produto SetModalVisible={SetModalVisible} />
          <Produto SetModalVisible={SetModalVisible} />
          <Produto SetModalVisible={SetModalVisible} />
          <Produto SetModalVisible={SetModalVisible} />
          <Produto SetModalVisible={SetModalVisible} />
          <Produto SetModalVisible={SetModalVisible} />
        </GridCardapio>
      </ContainerCardapio>
      <Modal className={ModalVisible ? 'visible' : ''}>
        <ModalContent>
          <div>
            <img src={ImgModal} alt="Prato selecionado" />
          </div>
          <Description>
            <div>
              <h4>NOME DO PRATO</h4>
              <img
                src={Close}
                alt="close modal"
                onClick={() => SetModalVisible(false)}
              />
            </div>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião. <br /> <br /> Serve: de 2 a 3 pessoas
            </p>
            <button>Adicionar ao carrinho - VALOR</button>
          </Description>
        </ModalContent>
        <div className="overlay" onClick={() => SetModalVisible(false)}></div>
      </Modal>
    </>
  )
}

export default Cardapio
