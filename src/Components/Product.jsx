import Add from "/src/images/add.png";
import Minus from "/src/images/minus.png";
import AddToCart from "/src/images/add-to-cart.png";
import { useOutletContext } from "react-router-dom";

export default function Product() {
  const {
    currentProductInView,
    quantityOfItems,
    setQuantityOfItems,
    setProductCart,
    productCart,
  } = useOutletContext();

  function increaseQuantity() {
    setQuantityOfItems((prevQuantity) => prevQuantity + 1);
  }

  function reduceQuantity() {
    if (quantityOfItems >= 1) {
      setQuantityOfItems((prevQuantity) => prevQuantity - 1);
    }
  }

  function handleChange(event) {
    const { value } = event.currentTarget;

    setQuantityOfItems(value);
  }

  function addToCart() {
    if (quantityOfItems > 0) {
      setProductCart((prevCart) => {
        const productId = currentProductInView.id;
        const existingProductIndex = prevCart.findIndex(
          (item) => item.product.id === productId
        );

        if (existingProductIndex !== -1) {
          const updatedCart = [...prevCart];

          updatedCart[existingProductIndex] = {
            ...updatedCart[existingProductIndex],
            quantity:
              updatedCart[existingProductIndex].quantity + quantityOfItems,
          };

          return updatedCart;
        } else {
          return [
            ...prevCart,
            {
              product: currentProductInView,
              quantity: quantityOfItems,
            },
          ];
        }
      });
    }
    setQuantityOfItems(0);
    console.log([productCart]);
  }

  return (
    <div className="product-description-card">
      <div className="product-left-side">
        <img
          src={currentProductInView.image}
          alt="product image"
          className="product-img-large"
        />
      </div>
      <div className="product-right-side">
        <div className="right-side-top">
          <div className="product-description">
            {currentProductInView.description}
          </div>
          <div className="product-price">
            ${parseFloat(currentProductInView.price).toFixed(2)}
          </div>
        </div>
        <div className="right-side-bottom">
          <div className="quantity-tool">
            <div className="decrease">
              <img
                src={Minus}
                alt="Reduce Quantity"
                className="product-icon"
                onClick={reduceQuantity}
              />
            </div>
            <input
              type="number"
              name="quantity"
              value={quantityOfItems}
              onChange={handleChange}
              className="quantity-input"
            />
            <div className="increase">
              <img
                src={Add}
                alt="Increase Quantity"
                className="product-icon"
                onClick={increaseQuantity}
              />
            </div>
          </div>
          <div className="add-to-cart" onClick={addToCart}>
            <img
              src={AddToCart}
              alt="Add to Cart"
              className="product-icon-large"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
