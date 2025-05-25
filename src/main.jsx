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
    path: "/*",
    element: <App />,
    children: [
      { path: "main", element: <Main /> },
      { path: "products", element: <Products /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
