import Add from "/src/images/add.png";
import Minus from "/src/images/minus.png";
import AddToCart from "/src/images/add-to-cart.png";

export default function Product(props) {
  function increaseQuantity() {
    props.setQuantityOfItems((prevQuantity) => prevQuantity + 1);
  }

  function reduceQuantity() {
    if (props.quantityOfItems >= 1) {
      props.setQuantityOfItems((prevQuantity) => prevQuantity - 1);
    }
  }

  function handleChange(event) {
    const { value } = event.currentTarget;

    props.setQuantityOfItems(value);
  }

  function addToCart() {
    if (props.quantityOfItems > 0) {
      props.setProductCart((prevCart) => {
        const productId = props.currentProductInView.id;
        const existingProductIndex = prevCart.findIndex(
          (item) => item.product.id === productId
        );

        if (existingProductIndex !== -1) {
          const updatedCart = [...prevCart];

          updatedCart[existingProductIndex] = {
            ...updatedCart[existingProductIndex],
            quantity:
              updatedCart[existingProductIndex].quantity +
              props.quantityOfItems,
          };

          return updatedCart;
        } else {
          return [
            ...prevCart,
            {
              product: props.currentProductInView,
              quantity: props.quantityOfItems,
            },
          ];
        }
      });
    }
    props.setQuantityOfItems(0);
    console.log([props.productCart]);
  }

  return (
    <div className="product-description-card">
      <div className="product-left-side">
        <img
          src={props.currentProductInView.image}
          alt="product image"
          className="product-img-large"
        />
      </div>
      <div className="product-right-side">
        <div className="right-side-top">
          <div className="product-description">
            {props.currentProductInView.description}
          </div>
          <div className="product-price">
            ${parseFloat(props.currentProductInView.price).toFixed(2)}
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
              value={props.quantityOfItems}
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
