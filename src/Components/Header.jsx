import ShoppingCart from "/src/images/shopping-cart.png";
import { Link } from "react-router-dom";

export default function Header(props) {
  function handleChange(event) {
    if (event.target.classList.contains("header-home")) {
      props.setScreenFocus("Main");
      props.setProductInView(false);
    } else if (event.target.classList.contains("header-shop")) {
      props.setScreenFocus("Products");
    } else if (
      event.target.classList.contains("header-shopping-cart") ||
      event.target.classList.contains("trolley-count") ||
      event.target.classList.contains("header-order-total") ||
      event.target.classList.contains("header-icon")
    ) {
      props.setScreenFocus("Cart");
    }
  }

  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-left-text">odinshop</h1>
      </div>
      <div className="header-right">
        <Link
          to="/main"
          className="header-home"
          onClick={handleChange}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          home
        </Link>
        <Link
          to="/products"
          className="header-shop"
          onClick={handleChange}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          shop
        </Link>
        <Link
          to="/cart"
          className="header-shopping-cart"
          onClick={handleChange}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <img
            src={ShoppingCart}
            className="header-icon"
            alt="shopping cart icon"
          />

          <div className="trolley-count">{props.trolleyCount}</div>

          <div className="header-order-total">${props.totalCart}</div>
        </Link>
      </div>
    </div>
  );
}
