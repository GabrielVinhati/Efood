import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { GlobalCss } from './styled'
import store from './store'

import Footer from './components/Footer'
import Inicial from './components/pages/Inicial/index'
import Categories from './components/pages/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Inicial />} />
    <Route path="/categories/:id" element={<Categories />} />
    <Route path="/categories/:id" element={<Categories />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
