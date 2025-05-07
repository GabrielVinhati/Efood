import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../store/reducers/cart'

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
