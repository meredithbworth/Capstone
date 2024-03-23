import { createSlice } from "@reduxjs/toolkit"

const initialState = {
//    holding: 0,
   currentCart: [],
  };

// const slice = createSlice({
// name: "cart",
// initialState,
// reducers: {
//     remove: (state, { payload }) => {
//     state.balance -= payload;
//     state.currentCart.pop({
//         type: "remove from cart",
//         amount: payload,
//         balance: state.balance,
//     });
//     },
//     add: (state, { payload }) => {
//     state.balance += payload;
//     state.currentCart.push({
//     type: "add to cart",
//     amount: payload,
//     balance: state.balance,
//     });
//     },
// }});

export const { add, remove} = slice.actions;

// export const selectHoldItems = (state) => state.transactions.balance;
export const selectCurrentCart = (state) => state.transactions.currentCart;

export default slice.reducer;