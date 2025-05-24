import ShoppingCart from "/src/images/shopping-cart.png";

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
        <div className="header-home" onClick={handleChange}>
          home
        </div>
        <div className="header-shop" onClick={handleChange}>
          shop
        </div>
        <div className="header-shopping-cart" onClick={handleChange}>
          <img
            src={ShoppingCart}
            className="header-icon"
            alt="shopping cart icon"
          />

          <div className="trolley-count">{props.trolleyCount}</div>

          <div className="header-order-total">${props.totalCart}</div>
        </div>
      </div>
    </div>
  );
}
