import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalCss } from './styled'
import store from './store'

import Footer from './components/Footer'
import Inicial from './components/pages/Inicial/index'
import Categories from './components/pages/Categories'
import Checkout from './components/pages/Checkout'
import Cart from './components/Cart'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Inicial />} />
    <Route path="/categories/:id" element={<Categories />} />
    <Route
      path="/checkout"
      element={
        <Checkout
          onClose={function (): void {
            throw new Error('Function not implemented.')
          }}
        />
      }
    />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
