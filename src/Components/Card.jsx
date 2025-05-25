import AddToCart from "/src/images/add-to-cart.png";
import { useRef } from "react";

export default function Card(props) {
  const targetRef = useRef(null);

  function handleCardClick() {
    props.setCurrentProductInView(props.product);
    props.setProductInView(true);
    window.scrollTo(0, 0);
  }

  return (
    <div ref={targetRef} className="product-card" onClick={handleCardClick}>
      <div className="product-card-top">
        <div className="product-image">
          <img
            src={props.product.image}
            alt="image of the product"
            className="product-img"
          />
        </div>
      </div>
      <div className="product-card-bottom">
        <div className="product-title">{props.product.title}</div>
        <div className="product-lower">
          <div className="product-price">
            ${parseFloat(props.product.price).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
