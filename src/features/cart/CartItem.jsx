import { FaTrash } from "react-icons/fa";
import { calculateTotalPrice, deleteCartItem } from "@reducers/cartSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotalPrice());
  }, []);

  return (
    <>
      <article className="cart-item pr-20">
        <div className="title">
          <img src={product.image} alt="product image" />
          <div>
            <h5 className="name">{product.name}</h5>
          </div>
        </div>
        <h5 className="price pr-16">{product.price}$</h5>
        <div className="mr-8">
          <h2 className="mb-0">{product.quantity}</h2>
        </div>
        <h5 className="subtotal">{product.price * product.quantity}$</h5>
        <button
          onClick={() => dispatch(deleteCartItem(product.id))}
          className="remove-btn"
        >
          <FaTrash />
        </button>
      </article>
    </>
  );
};

export default CartItem;
