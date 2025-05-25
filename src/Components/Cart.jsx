import Add from "/src/images/add.png";
import Minus from "/src/images/minus.png";
import Arrow from "/src/images/right-arrow.png";
import Bin from "/src/images/recycle-bin.png";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    productCart,
    setProductCart,
    setScreenFocus,
    setProductInView,
    setCurrentProductInView,
    setQuantityOfItems,
    totalCart,
  } = useOutletContext();

  function handleContinue() {
    setProductInView(false);
    setScreenFocus("Products");
    setQuantityOfItems(0);
  }

  function handleDisplay() {
    function increaseQuantity(productId) {
      setProductCart((prevCart) => {
        return prevCart.map((item) => {
          if (item.product.id === productId) {
            const newQuantity = item.quantity + 1;
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
      });
    }

    function decreaseQuantity(productId) {
      setProductCart((prevCart) => {
        return prevCart.map((item) => {
          if (item.product.id === productId) {
            if (item.quantity > 0) {
              const newQuantity = item.quantity - 1;
              return { ...item, quantity: newQuantity };
            } else {
              return { ...item, quantity: 0 };
            }
          }
          return item;
        });
      });
    }

    function handleChange(event, productId) {
      const { value } = event.currentTarget;
      setProductCart((prevCart) => {
        return prevCart.map((item) => {
          if (item.product.id === productId) {
            const newQuantity = parseInt(value, 10);
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
      });
    }

    function handleProductClick(product) {
      setScreenFocus("Products");
      setProductInView(true);
      setCurrentProductInView(product);
    }

    function removeFromCart(product) {
      const currentCart = productCart;
      const filteredCart = currentCart.filter(
        (item) => item.product.id !== product
      );

      setProductCart(filteredCart);
    }

    if (productCart.length >= 1) {
      return productCart.map((product, index) => (
        <div key={index} product={product} className="cart-product">
          <div className="cart-img">
            <img
              src={product.product.image}
              className="cart-img"
              alt="product image"
            />
          </div>
          <Link
            to="/odin-shopping-cart/products"
            className="cart-title"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => handleProductClick(product.product)}
          >
            {product.product.title}
          </Link>
          <div className="cart-quantity">
            <div className="quantity-tool">
              <div className="decrease">
                <img
                  src={Minus}
                  alt="Reduce Quantity"
                  className="cart-icon"
                  onClick={() => decreaseQuantity(product.product.id)}
                />
              </div>
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={(event) => handleChange(event, product.product.id)}
                className="cart-input"
              />
              <div className="increase">
                <img
                  src={Add}
                  alt="Increase Quantity"
                  className="cart-icon"
                  onClick={() => increaseQuantity(product.product.id)}
                />
              </div>
            </div>
          </div>
          <div className="cart-cost">
            ${parseFloat(product.product.price * product.quantity).toFixed(2)}
          </div>
          <div className="remove-from-cart">
            <img
              src={Bin}
              alt="Remove from Cart"
              className="cart-icon-large"
              onClick={() => removeFromCart(product.product.id)}
            />
          </div>
        </div>
      ));
    }
  }

  return (
    <div className="cart-section">
      <div className="cart-heading">Shopping Cart</div>
      {productCart.length >= 1 && (
        <>
          <div className="cart-main">
            <div className="cart-left-side">
              <div className="cart">
                <div className="cart-products">{handleDisplay()}</div>
              </div>
            </div>
            <div className="order-summary">
              <div className="summary-heading">Order Summary</div>
              <div className="summary-subheading">
                <div className="summary-price">Original price</div>
                <div className="dollars">${totalCart}</div>
              </div>
              <div className="summary-subheading">
                <div className="summary-savings">Savings</div>
                <div className="dollars">$0.00</div>
              </div>
              <div className="summary-subheading">
                <div className="summary-shipping">Estimated shipping</div>
                <div className="dollars">$0.00</div>
              </div>
              <div className="summary-total">
                <div className="total">Total</div>
                <div className="total-dollars">${totalCart}</div>
              </div>
              <div className="checkout">
                <button className="checkout-btn" type="button">
                  Proceed to Checkout
                </button>
                <div className="checkout-continue">
                  or
                  <span className="continue-text" onClick={handleContinue}>
                    Continue Shopping
                  </span>
                  <img src={Arrow} alt="right arrow" className="cart-icon" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {productCart.length === 0 && (
        <>
          <div className="empty-cart">
            <div className="empty-cart-text">
              Your cart is empty. Click below to Continue Shopping.
            </div>
            <Link
              to="/odin-shopping-cart/products"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button
                className="checkout-btn"
                type="button"
                onClick={handleContinue}
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
