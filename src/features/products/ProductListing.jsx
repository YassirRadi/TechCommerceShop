import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@reducers/productSlice";
import { useEffect } from "react";
import ProductCard from "@products/ProductCard";
import Error from "@ui/Error";
import Loader from "@ui/Loader";

const ProductListing = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductListing;
