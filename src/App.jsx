import { useState } from "react";
import NavBar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Models from "./components/models/Models";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import { ToastContainer } from 'react-toastify'

const getModels = async () => {
  const res = await fetch("/models.json");
  return res.json();
};

const modelPromise = getModels();

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([])

  const handleCartClick = () => {
    setActiveTab("cart");
  };

  return (
    <>
      {/* Pass cartCount and onCartClick to NavBar */}
      <NavBar cartCount={carts.length} onCartClick={handleCartClick} />

      <Banner />

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent">
        <input
          type="radio"
          name="my_tabs_1"
          className={`tab rounded-full w-40 transition-all duration-300 ${
      activeTab === "model" 
        ? "bg-linear-to-r from-pink-500 to-red-600 text-white shadow-lg"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
          aria-label="Models"
          onClick={() => setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
           className={`tab rounded-full w-40 transition-all duration-300 ${
      activeTab === "cart" 
        ? "bg-linear-to-r from-pink-500 to-red-600 text-white shadow-lg"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
          aria-label={`Cart (${carts.length})`}
          onClick={() => setActiveTab("cart")}
        />
      </div>

      {activeTab === "model" && <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/>}

      {activeTab === "cart" && <Cart  carts={carts} setCarts={setCarts}/>}

      <Footer />

       <ToastContainer/>
    </>
  );
}

export default App;