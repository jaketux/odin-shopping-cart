import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import { Outlet, useOutletContext } from "react-router-dom";

import Footer from "./Components/Footer";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const [orderTotal, setOrderTotal] = useState("$0.00");
  const [screenFocus, setScreenFocus] = useState("Main");
  const [currentProdCat, setCurrentProdCat] = useState("Men's Clothing");
  const [productInView, setProductInView] = useState(false);
  const [currentProductInView, setCurrentProductInView] = useState(null);
  const [mensClothing, setMensClothing] = useState([]);
  const [womensClothing, setWomensClothing] = useState([]);
  const [electronicsList, setElectronics] = useState([]);
  const [jeweleryList, setJewelery] = useState([]);
  const [quantityOfItems, setQuantityOfItems] = useState(0);
  const [productCart, setProductCart] = useState([]);
  const [trolleyCount, setTrolleyCount] = useState(0);

  let totalCart = parseFloat(orderTotal.replace("$", "")).toFixed(2);

  useEffect(() => {
    let totalItems = 0;

    for (const item of productCart) {
      totalItems += item.quantity;
    }
    setTrolleyCount(totalItems);
  }, [productCart]);

  useEffect(() => {
    let totalCostOfItems = 0;

    for (const item of productCart) {
      totalCostOfItems += item.product.price * item.quantity;
    }

    let finalCostOfItems = "$" + Math.round(totalCostOfItems * 100) / 100;

    setOrderTotal(finalCostOfItems);
  }, [productCart]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const mens = [];
        const womens = [];
        const electronics = [];
        const jewelery = [];

        data.forEach((item) => {
          if (item.category === "men's clothing") {
            mens.push(item);
          } else if (item.category === "women's clothing") {
            womens.push(item);
          } else if (item.category === "jewelery") {
            jewelery.push(item);
          } else if (item.category === "electronics") {
            electronics.push(item);
          }
        });
        setMensClothing(mens);
        setWomensClothing(womens);
        setElectronics(electronics);
        setJewelery(jewelery);
      });
  }, []);

  const context = {
    currentProdCat,
    setCurrentProdCat,
    screenFocus,
    setScreenFocus,
    mensClothing,
    setMensClothing,
    womensClothing,
    setWomensClothing,
    electronicsList,
    setElectronics,
    jeweleryList,
    setJewelery,
    productInView,
    setProductInView,
    currentProductInView,
    setCurrentProductInView,
    quantityOfItems,
    setQuantityOfItems,
    productCart,
    setProductCart,
    trolleyCount,
    setTrolleyCount,
    orderTotal,
    setOrderTotal,
    totalCart,
  };

  return (
    <>
      <Header
        trolleyCount={trolleyCount}
        orderTotal={orderTotal}
        setScreenFocus={setScreenFocus}
        setProductInView={setProductInView}
        totalCart={totalCart}
      />
      <Outlet context={context} />
      {/* {screenFocus === "Main" && (
        <Main
          currentProdCat={currentProdCat}
          setCurrentProdCat={setCurrentProdCat}
          setScreenFocus={setScreenFocus}
        />
      )}
      {screenFocus === "Products" && (
        <Products
          currentProdCat={currentProdCat}
          setCurrentProdCat={setCurrentProdCat}
          mensClothing={mensClothing}
          womensClothing={womensClothing}
          electronicsList={electronicsList}
          jeweleryList={jeweleryList}
          productInView={productInView}
          setProductInView={setProductInView}
          currentProductInView={currentProductInView}
          setCurrentProductInView={setCurrentProductInView}
          quantityOfItems={quantityOfItems}
          setQuantityOfItems={setQuantityOfItems}
          productCart={productCart}
          setProductCart={setProductCart}
          setTrolleyCount={setTrolleyCount}
          setOrderTotal={setOrderTotal}
        />
      )}
      {screenFocus === "Cart" && (
        <Cart
          productCart={productCart}
          setProductCart={setProductCart}
          trolleyCount={trolleyCount}
          setTrolleyCount={setTrolleyCount}
          totalCart={totalCart}
          setCurrentProdCat={setCurrentProdCat}
          setScreenFocus={setScreenFocus}
          setProductInView={setProductInView}
          setCurrentProductInView={setCurrentProductInView}
        />
      )} */}

      <Footer />
    </>
  );
}

export default App;
