import Card from "./Card";
import Product from "./Product";
import { useOutletContext } from "react-router-dom";

export default function Products() {
  const {
    currentProdCat,
    setCurrentProdCat,
    mensClothing,
    womensClothing,
    electronicsList,
    jeweleryList,
    productInView,
    setProductInView,
    currentProductInView,
    setCurrentProductInView,
    quantityOfItems,
    setQuantityOfItems,
    productCart,
    setProductCart,
  } = useOutletContext();

  function handleCategoryClick(event) {
    setProductInView(false);
    setCurrentProdCat(event.currentTarget.textContent);
    setQuantityOfItems(0);
  }

  function handleDisplay() {
    let productList = [];

    if (currentProdCat === "Men's Clothing") {
      productList = mensClothing;
    } else if (currentProdCat === "Women's Clothing") {
      productList = womensClothing;
    } else if (currentProdCat === "Electronics") {
      productList = electronicsList;
    } else if (currentProdCat === "Jewelery") {
      productList = jeweleryList;
    }

    if (!productInView) {
      return productList.map((product, index) => (
        <Card
          key={index}
          product={product}
          className="product-card"
          productInView={productInView}
          setProductInView={setProductInView}
          currentProductInView={currentProductInView}
          setCurrentProductInView={setCurrentProductInView}
        />
      ));
    } else {
      return (
        <Product
          currentProductInView={currentProductInView}
          setProductInView={setProductInView}
          quantityOfItems={quantityOfItems}
          setQuantityOfItems={setQuantityOfItems}
          setProductCart={setProductCart}
          productCart={productCart}
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
        <div className="products-heading-right">
          {productInView ? currentProductInView.title : currentProdCat}
        </div>

        <div className={productInView ? "products-full" : "products-grid"}>
          {handleDisplay()}
        </div>
      </div>
    </div>
  );
}
