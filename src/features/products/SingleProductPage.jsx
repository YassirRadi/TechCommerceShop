import { addToCart } from "@reducers/cartSlice";
import { fetchSingleProduct } from "@reducers/productSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "@ui/Loader";

const SingleProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { singleProduct, loadingSingleProduct } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, []);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...singleProduct, quantity }));
    navigate("/cart");
  };

  return (
    <>
      {loadingSingleProduct ? (
        <Loader />
      ) : (
        <>
          <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                  src={singleProduct.image}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-between gap-y-2.5">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    Product Title
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">
                    {singleProduct.name}
                  </h1>

                  <p className="leading-relaxed">{singleProduct.description}</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <div className="flex flex-col gap-y-6 items-start">
                      <div>
                        <span className="font-semibold">Category</span>:{" "}
                        {singleProduct.category}
                      </div>
                      <div>
                        <span className="font-semibold">Company</span>:{" "}
                        {singleProduct.company}
                      </div>
                      <div>
                        <span className="font-semibold">Stock</span>:{" "}
                        {singleProduct.stock}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 items-center">
                    <span className="font-medium text-2xl text-gray-900">
                      {Number(singleProduct.price).toFixed(2)}$
                    </span>
                    <div className="flex flex-row items-center gap-x-6">
                      <button
                        onClick={() => setQuantity((c) => c - 1)}
                        className="text-4xl"
                      >
                        -
                      </button>
                      <p className="text-4xl font-semibold">{quantity}</p>
                      <button
                        onClick={() => setQuantity((c) => c + 1)}
                        className="text-4xl"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={handleAddToCart}
                      className="flex ml-auto text-white bg-[#ab7a5f] border-0 py-2 px-6 focus:outline-none rounded"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default SingleProductPage;
