import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Products from "/src/Components/Products.jsx";
import Cart from "/src/Components/Cart.jsx";
import Main from "/src/Components/Main.jsx";

const router = createBrowserRouter([
  {
    path: "odin-shopping-cart/",
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      { path: "/odin-shopping-cart/main", element: <Main /> },
      { path: "/odin-shopping-cart/products", element: <Products /> },
      { path: "/odin-shopping-cart/cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
