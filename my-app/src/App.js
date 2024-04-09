import React from "react";
import "./assets/css/style.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import Company from "./components/Company";
import Product from "./components/Product";
import Community from "./components/Community";
import { vData } from "./data";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main vData={vData} />} />
        <Route path="/com" element={<Company />} />
        {/* Company 컴포넌트 path를 /com으로 설정 */}
        <Route path="/pro/:item" element={<Product vData={vData} />} />
        <Route path="/comm" element={<Community />} />
        {/* Community 컴포넌트 path를 /comm으로 설정 */}
      </Routes>

      <Footer />
    </>
  );
}

export default App;
