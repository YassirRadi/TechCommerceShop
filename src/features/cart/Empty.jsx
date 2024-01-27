import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <div className="text-center mt-36">
      <h1 className="text-4xl font-semibold">Your cart is empty</h1>
      <Link to="/products">
        <button className="mt-8 text-white text-center bg-[#ab7a5f] px-8 py-1.5 border-0 rounded">
          Fill it
        </button>
      </Link>
    </div>
  );
};

export default Empty;
