import React, { useEffect, useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Row, Col, Card, Input } from "antd";
import millify from "millify";
import { Link } from "react-router-dom";

const CryptoCurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  console.log("cryptos", cryptos);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterdData = cryptosList?.data?.coins.filter((element) =>
      element.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setCryptos(filterdData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return "Loading...";
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search"
           
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((crypto) => (
          <Col xs={25} sm={12} lg={6} className="crypto-card" key={crypto.id}>
            <Link to={`/crypto/${crypto.uuid}`}>
              <Card
                title={`${crypto.rank}. ${crypto.name}`}
                extra={<img className="crypto-image" src={crypto.iconUrl} />}
                hoverable
              >
                <p>Price : {millify(crypto.price)}$</p>
                <p>Market Cap : {millify(crypto.marketCap)}</p>
                <p>daily change : {millify(crypto.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CryptoCurrencies;
