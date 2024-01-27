import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@pages/Home";
import Product from "@pages/Product";
import About from "@pages/About";
import Cart from "@pages/Cart";
import Register from "@pages/Register";
import Login from "@pages/Login";
import ProductDetails from "@pages/ProductDetails";
import Error from "@ui/Error";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: "/products",
      element: <Product />,
      errorElement: <Error />,
    },
    {
      path: "/products/:name/:id",
      element: <ProductDetails />,
      errorElement: <Error />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <Error />,
    },
    {
      path: "/cart",
      element: <Cart />,
      errorElement: <Error />,
    },
    {
      path: "/register",
      element: <Register />,
      errorElement: <Error />,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
