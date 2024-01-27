import Filters from "@products/Filters";
import ProductListing from "@products/ProductListing";
import Navbar from "@ui/Navbar";

const Product = () => {
  return (
    <>
      <Navbar />
      <Filters />
      <ProductListing />
    </>
  );
};

export default Product;
