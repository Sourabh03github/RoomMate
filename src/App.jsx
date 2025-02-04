import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Footer from "./Components/Homepage/Footer/Footer";
import Header from "./Components/Homepage/Header/Header";
import HomePage from "./Components/Homepage/HomePage";
import Mattresses from "./Components/Mattresses/Mattresses";
import Mattressescard from "./Components/Mattresses/Mattressescard";
import ProductCards from "./Components/ProductPage/ProductCards/ProductCards";
import ProductDes from "./Components/ProductPage/ProductDes/ProductDes";
import ProductStaticDes from "./Components/ProductPage/ProductStaticDes/ProductStaticDes";
import ProductPage from "./Components/ProductPage/ProductPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import MattressCard from "./pages/products/MattressCards";
import MattressDesc from "./pages/productsDesc/MattressDesc";
import BeddingAccessoriesDesc from "./pages/productsDesc/BeddingAccessoriesDesc";
import ContactDealer from "./pages/ContactDealer";
import AllBlogs from "./pages/blog/AllBlogs";
import BlogPage from "./pages/blog/Blogs";
import Navbar from "./Components/Homepage/Header/Navbar";
import BeddingAccessoriesCards from "./pages/products/BeddingAccessoriesCards";
import ScrollToTopButton from "./Components/scrollToTopButton/ScrollToTopButton";
import AboutUs from "./Components/AboutUs/AboutUs";
import ScrollToTop from "../ScrollToTop";
// import BeddingCard from "./pages/products/BeddingCard.JSX";

// import ScrollToTop from "react-router-scroll-top";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* <Header /> */}
      <Navbar />
      {/* <Nav /> */}
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Mattresses" element={<Mattresses />} />
        <Route
          exact
          path="/Mattresses/:product_category"
          element={<MattressCard />}
        />
        <Route
          exact
          path="/Mattresses/:product_category/:product_img/:product_name"
          element={<MattressDesc />}
        />
        <Route
          exact
          path="/Mattresses/:product_category"
          element={<MattressCard />}
        />
        <Route
          exact
          path="/BeddingAccessories/:product_category"
          element={<BeddingAccessoriesCards />}
        />
        <Route
          exact
          path="/Mattresses/:product_category/:product_img/:product_name"
          element={<MattressDesc />}
        />
        <Route
          exact
          path="/BeddingAccessories/:product_category/:product_img/:product_name"
          element={<BeddingAccessoriesDesc />}
        />
        {/* <Route
          exact
          path="/BeddingAccessories/:product_category"
          element={<BeddingCard />}
        /> */}
        <Route path="/contact-dealer" element={<ContactDealer />} />

        {/* <Route
          path="/Mattresses/Orthopedic-Mattresses"
          element={<ProductStaticDes />}
        /> */}
        <Route path="/Products" element={<ProductPage />} />
        <Route path="/ProductDes" element={<ProductDes />} />
        <Route path="/ProductStaticDes" element={<ProductStaticDes />} />

        <Route path="/Products/product" element={<ProductCards />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        {/* <Route path="/contact-dealer" element={<ContactDealer />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
