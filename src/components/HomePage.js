import React from 'react'
import millify from 'millify'
import {Row, Col,  Statistic, Typography } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'
const {Title} = Typography

const HomePage = () => {

    const {data,isFetching} = useGetCryptosQuery();
 const GlobalStats = data?.data?.stats
 if(isFetching) return 'Loading...'
    return (
    <>
    <Title level={2} className="heading">
        Globale Crypto stats
    </Title>

    <Row>
        <Col  span={12}><Statistic title="Total Cryptocurrencies" value={GlobalStats.total} /> </Col>
        <Col  span={12}><Statistic title="Total Exchanges" value={millify(GlobalStats.totalExchanges)} /> </Col>
        <Col  span={12}><Statistic title="Total Market Cap" value={millify(GlobalStats.totalMarketCap)} /> </Col>
        <Col  span={12}><Statistic title="Total 24h Volume" value={millify(GlobalStats.total24hVolume)} /> </Col>
        <Col  span={12}><Statistic title="Total Markets" value={millify(GlobalStats.totalMarkets)}/> </Col>
    </Row>
    
    </>
  )
}

export default HomePage