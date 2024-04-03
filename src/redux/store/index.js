import { configureStore } from '@reduxjs/toolkit'
import singleAccount from '../reducer/singleAccount' // non serve /index, basta puntare alla cartella che lo contiene

// configureStore è la funzione principale di redux, quella che GENERA lo stato condiviso


const store = configureStore({
  reducer: singleAccount,
})

export default store
