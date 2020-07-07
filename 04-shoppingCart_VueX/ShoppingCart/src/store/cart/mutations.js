export default {
  CHANGE_QUANTITY: (state, { index, quantity }) => {
    state.listCarts[index].quantity += quantity;
  },
  BUY_PRODUCT: (state, data) => {
    state.listCarts.push(data);
  },
  DELETE_CART: (state, newListCarts) => {
    state.listCarts = newListCarts;
  }
};
