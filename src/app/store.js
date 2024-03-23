import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cartReducer.js'
import { api } from '../redux/apiReducer.js'

const store = configureStore({
    reducer: {
       cartState: cartReducer,
       [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eventsApi.middleware),
})

export default store;