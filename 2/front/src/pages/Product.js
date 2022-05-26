import { observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import http from "../http";
import MainPage from "../layout/MainPage";

const Product = () => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    http.get(`/product/${id}`).then((values) => {
      setData(values.data);
      setLoading(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <MainPage>
        {loading && (
          <div className="text-center">
            <Spinner animation="border" />
          </div>
        )}
        {!loading&&
        <Container>
          <Row md={2} className="shadow-sm p-5">
            <Col className="m-auto text-center">
              <img
                width={300}
                alt="1"
                src={`http://localhost:8080/${data.img}`}
              />
            </Col>
            <Col className="text-center m-auto">
              <h3>Название - {data.name}</h3>
              <h5>Цена - {data.price} руб</h5>
              <h5>Год - {data.year}</h5>
              <h5>Страна производителя - {data.coutry}</h5>
              <h5>Модель - {data.model}</h5>
            </Col>
          </Row>
          <div className="text-end mt-5">
            <Button variant="dark">Добавить в корзину</Button>
          </div>
        </Container>
        } 
      </MainPage>
    </>
  );
};

export default observer(Product);
