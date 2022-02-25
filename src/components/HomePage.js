import React from "react";
import millify from "millify";
import { Row, Col, Title, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";
import  CryptoCurrencies from '../components/CryptoCurrencies'
import News from '../components/News'
import { Link } from "react-router-dom";



const HomePage = () => {
    const { Title }= Typography

  const { data, isFetching } = useGetCryptosQuery(10);
  const GlobalStats = data?.data?.stats;
  if (isFetching) return "Loading...";
  return (
    <>
      <Title level={2} className="heading">
        Globale Crypto stats
      </Title>

      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={GlobalStats.total} />{" "}
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(GlobalStats.totalExchanges)}
          />{" "}
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(GlobalStats.totalMarketCap)}
          />{" "}
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(GlobalStats.total24hVolume)}
          />{" "}
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(GlobalStats.totalMarkets)}
          />{" "}
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the world{" "}
        </Title>

        <Title level={3} className="show-more">
        <Link to='/cryptocurrencies'>Show more</Link> 
        </Title>
      </div>
      <CryptoCurrencies simplified/>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
         Latest Crypto News
        </Title>

        <Title level={3} className="show-more">
        <Link to='/news'>Show more</Link> 
        </Title>
      </div>
      <News simplified/>
    </>
  );
};

export default HomePage;
