import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Product from "./Components/Product";
import Footer from "./Components/Footer";

const App = () => {
  const [cart, setcart] = useState(0);
  let [toggle1, settoggle1] = useState(false);
  let [toggle2, settoggle2] = useState(false);
  let [toggle3, settoggle3] = useState(false);
  let [toggle4, settoggle4] = useState(false);
  let [toggle5, settoggle5] = useState(false);
  let [toggle6, settoggle6] = useState(false);
  let [toggle7, settoggle7] = useState(false);
  let [toggle8, settoggle8] = useState(false);
  return (
    <div>
      <Navbar cart={cart} />
      <Header />
      <Product
        cart={cart}
        setcart={setcart}
        toggle1={toggle1}
        settoggle1={settoggle1}
        toggle2={toggle2}
        settoggle2={settoggle2}
        toggle3={toggle3}
        settoggle3={settoggle3}
        toggle4={toggle4}
        settoggle4={settoggle4}
        toggle5={toggle5}
        settoggle5={settoggle5}
        toggle6={toggle6}
        settoggle6={settoggle6}
        toggle7={toggle7}
        settoggle7={settoggle7}
        toggle8={toggle8}
        settoggle8={settoggle8}
      />
      <Footer />
    </div>
  );
};

export default App;
