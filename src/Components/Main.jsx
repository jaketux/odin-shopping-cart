import MensClothing from "/src/images/mensclothing.jpg";
import WomensClothing from "/src/images/womensclothing.jpg";
import Electronics from "/src/images/electronics.jpg";
import Jewellery from "/src/images/jewellery.jpg";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Main() {
  const { setCurrentProdCat, setScreenFocus } = useOutletContext();

  function handleCategoryClick(event) {
    setCurrentProdCat(event.currentTarget.textContent);
    setScreenFocus("Products");
  }

  return (
    <div className="main">
      <div className="main-top-text">One click. Endless finds.</div>
      <div className="main-middle-section">
        <Link
          to="/odin-shopping-cart/products"
          className="main-card"
          onClick={handleCategoryClick}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div>
            <img
              src={MensClothing}
              alt="mens clothing stock image"
              className="main-card-img"
            />
          </div>
          <div className="main-card-text">Men's Clothing</div>
        </Link>
        <Link
          to="/odin-shopping-cart/products"
          className="main-card"
          onClick={handleCategoryClick}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div>
            <img
              src={WomensClothing}
              alt="womens clothing stock image"
              className="main-card-img"
            />
          </div>
          <div className="main-card-text">Women's Clothing</div>
        </Link>

        <Link
          to="/odin-shopping-cart/products"
          className="main-card"
          onClick={handleCategoryClick}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div>
            <img
              src={Electronics}
              alt="electronics stock image"
              className="main-card-img"
            />
          </div>
          <div className="main-card-text">Electronics</div>
        </Link>
        <Link
          to="/odin-shopping-cart/products"
          className="main-card"
          onClick={handleCategoryClick}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <div>
            <img
              src={Jewellery}
              alt="jewellery stock image"
              className="main-card-img"
            />
          </div>

          <div className="main-card-text">Jewelery</div>
        </Link>
      </div>
    </div>
  );
}
