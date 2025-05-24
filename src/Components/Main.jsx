import MensClothing from "/src/images/mensclothing.jpg";
import WomensClothing from "/src/images/womensclothing.jpg";
import Electronics from "/src/images/electronics.jpg";
import Jewellery from "/src/images/jewellery.jpg";

export default function Main(props) {
  function handleCategoryClick(event) {
    props.setCurrentProdCat(event.currentTarget.textContent);
    props.setScreenFocus("Products");
  }

  return (
    <div className="main">
      <div className="main-top-text">One click. Endless finds.</div>
      <div className="main-middle-section">
        <div className="main-card" onClick={handleCategoryClick}>
          <div>
            <img
              src={MensClothing}
              alt="mens clothing stock image"
              className="main-card-img"
            />
          </div>
          <div className="main-card-text">Men's Clothing</div>
        </div>
        <div className="main-card" onClick={handleCategoryClick}>
          <div>
            <img
              src={WomensClothing}
              alt="womens clothing stock image"
              className="main-card-img"
            />
          </div>
          <div className="main-card-text">Women's Clothing</div>
        </div>

        <div className="main-card" onClick={handleCategoryClick}>
          <div>
            <img
              src={Electronics}
              alt="electronics stock image"
              className="main-card-img"
            />
          </div>
          <div className="main-card-text">Electronics</div>
        </div>
        <div className="main-card" onClick={handleCategoryClick}>
          <div>
            <img
              src={Jewellery}
              alt="jewellery stock image"
              className="main-card-img"
            />
          </div>

          <div className="main-card-text">Jewellery</div>
        </div>
      </div>
    </div>
  );
}
