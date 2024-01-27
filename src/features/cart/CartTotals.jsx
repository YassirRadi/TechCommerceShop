import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartTotals = () => {
  const { shippingCost, subTotals, totalOrder } = useSelector(
    (state) => state.cart
  );

  return (
    <section className="totals flex justify-center mt-12">
      <div>
        <article>
          <h5>
            subtotal :<span>{subTotals}</span>
          </h5>
          <p className="mt-4">
            shipping fee :<span>{shippingCost}</span>
          </p>
          <hr className="mt-4" />
          <h4>
            order total :<span>{totalOrder}</span>
          </h4>
        </article>
        <Link>
          <button
            to="/checkout"
            className="w-full bg-[#ab7a5f] py-2 mt-4 text-center text-white rounded"
          >
            proceed to checkout
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CartTotals;
