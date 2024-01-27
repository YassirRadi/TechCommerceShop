import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import CartTotals from "@cart/CartTotals";
import CartColumns from "@cart/cartColumns";
import CartItem from "@cart/CartItem";
import { resetCart } from "@reducers/cartSlice";
import Empty from "@cart/Empty";
import { toast, ToastContainer } from "react-toastify";
import { Bounce } from "react-toastify";

const CartContent = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const resetCartHandler = () => {
    dispatch(resetCart());
    toast.success("Cart is cleared!", {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      {cart.length === 0 ? (
        <>
          <Empty />
        </>
      ) : (
        <section className="section-center py-20 mx-auto">
          <CartColumns />
          {cart.map((product) => {
            return <CartItem key={product.id} product={product} />;
          })}
          <hr />
          <div className="flex justify-between mt-4">
            <Link
              to="/products"
              className="bg-[#ab7a5f] text-white p-1 px-2 cursor-pointer rounded"
            >
              continue shopping
            </Link>
            <button
              onClick={resetCartHandler}
              className="bg-[#ab7a5f] text-white p-1 px-2 cursor-pointer rounded"
            >
              clear shopping cart
            </button>
          </div>
          <CartTotals />
        </section>
      )}
    </>
  );
};

export default CartContent;
