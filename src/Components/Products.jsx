import Card from "./Card";
import Product from "./Product";

export default function Products(props) {
  function handleCategoryClick(event) {
    props.setProductInView(false);
    props.setCurrentProdCat(event.currentTarget.textContent);
    props.setQuantityOfItems(0);
  }

  function handleDisplay() {
    let productList = [];

    if (props.currentProdCat === "Men's Clothing") {
      productList = props.mensClothing;
    } else if (props.currentProdCat === "Women's Clothing") {
      productList = props.womensClothing;
    } else if (props.currentProdCat === "Electronics") {
      productList = props.electronicsList;
    } else if (props.currentProdCat === "Jewelery") {
      productList = props.jeweleryList;
    }

    if (!props.productInView) {
      return productList.map((product, index) => (
        <Card
          key={index}
          product={product}
          className="product-card"
          productInView={props.productInView}
          setProductInView={props.setProductInView}
          currentProductInView={props.currentProductInView}
          setCurrentProductInView={props.setCurrentProductInView}
        />
      ));
    } else {
      return (
        <Product
          currentProductInView={props.currentProductInView}
          setProductInView={props.setProductInView}
          quantityOfItems={props.quantityOfItems}
          setQuantityOfItems={props.setQuantityOfItems}
          setProductCart={props.setProductCart}
          productCart={props.productCart}
        />
      );
    }
  }

  return (
    <div className="products">
      <div className="products-left-side">
        <div className="products-heading-left">Category</div>
        <div className="products-categories">
          <ul className="categories-list">
            <li className="product-category" onClick={handleCategoryClick}>
              Men's Clothing
            </li>
            <li className="product-category" onClick={handleCategoryClick}>
              Women's Clothing
            </li>
            <li className="product-category" onClick={handleCategoryClick}>
              Electronics
            </li>
            <li className="product-category" onClick={handleCategoryClick}>
              Jewelery
            </li>
          </ul>
        </div>
      </div>
      <div className="products-right-side">
        {props.productInView ? (
          <div className="products-heading-right">
            {props.currentProductInView.title}
          </div>
        ) : (
          <div className="products-heading-right">{props.currentProdCat} </div>
        )}
        {props.productInView ? (
          <div className="products-full">{handleDisplay()}</div>
        ) : (
          <div className="products-grid">{handleDisplay()}</div>
        )}
      </div>
    </div>
  );
}
