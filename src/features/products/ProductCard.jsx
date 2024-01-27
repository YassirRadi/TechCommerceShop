import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <Link to={`/products/${product.name}/${product.id}`}>
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
          <div className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
            <img
              className="object-cover"
              src={product.image}
              alt="Product image"
            />
          </div>
          <div className="mt-4 px-5 pb-5">
            <h5 className="text-xl tracking-tight text-slate-900">
              {product.name}
            </h5>
            <div className="mt-2 mb-5 flex items-center justify-between">
              <p className="text-3xl font-bold text-slate-900">
                {product.price}$
              </p>
              <div className="flex items-center">
                <p className="font-bold">Stock: {product.stock} left</p>
              </div>
            </div>
            <button className="w-full rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Show details
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
