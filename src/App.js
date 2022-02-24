import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";
import "antd/dist/antd.css";
import "./app.css";
import HomePage from "./components/HomePage";
import CryptoCurrencies from "./components/CryptoCurrencies";
import Exchanges from "./components/Exchanges";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
     

      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "center" }}
        >
          CryptoNews <br />
          All right reserverd
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="news">News</Link>
        </Space>
      </div>

      </div>
    </div>
  );
};

export default App;
