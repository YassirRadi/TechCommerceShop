const initialCartState = {
  cart: [],
  shippingCost: 20,
  subTotals: 0,
  totalOrder: 0,
};

const cartSlice = (state = initialCartState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { id, name, price, image, quantity } = action.payload;
      const productExisted = state.cart.find((product) => product.id === id);
      if (productExisted) {
        const updatedCart = state.cart.map((product) =>
          product.id === id
            ? {
                ...product,
                quantity: quantity,
                subtotal: quantity * price,
              }
            : product
        );
        return { ...state, cart: updatedCart };
      } else {
        const newItem = {
          id: id,
          name: name,
          price: price,
          image: image,
          quantity: quantity,
          subtotal: price * quantity,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    case "DELETE_CART_ITEM":
      const deletedProduct = state.cart.find(
        (product) => product.id === action.payload
      );
      const updatedCart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      const updatedSubTotals = updatedCart.reduce(
        (prev, acc) => prev + acc.subtotal,
        0
      );
      return {
        ...state,
        cart: updatedCart,
        subTotals: updatedSubTotals,
        totalOrder: state.totalOrder - deletedProduct.subtotal,
      };
    case "TOTAL_COUNT":
      return {
        ...state,
        subTotals: state.cart.reduce((prev, acc) => {
          return prev + acc.subtotal;
        }, 0),
        totalOrder: state.subTotals + state.shippingCost,
      };
    case "RESET_CART":
      return { ...state, cart: [], subTotals: 0, totalOrder: 0 };
    default:
      return state;
  }
};

export const addToCart = (product) => {
  return { type: "ADD_TO_CART", payload: product };
};

export const deleteCartItem = (id) => {
  return { type: "DELETE_CART_ITEM", payload: id };
};

export const resetCart = () => {
  return { type: "RESET_CART" };
};

export const calculateTotalPrice = () => {
  return { type: "TOTAL_COUNT" };
};

export default cartSlice;
