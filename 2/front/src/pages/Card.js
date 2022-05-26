import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import MainPage from "../layout/MainPage";

const Card = () => {
  return (
    <>
      <MainPage>
        <Container>
          <h4 className="text-center pt-3 pb-3">Корзина</h4>
          <Table className="text-center fs-5">
            <thead>
              <tr>
                <th>Название</th>
                <th>Кол-во</th>
                <th>Удалить</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Canon</td>
                <td >
                  <button>+</button>
                  32
                  <button>-</button>
                </td>
                <td>
                  <Button variant="light">Удалить</Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="text-end pt-5">
          <Button variant="dark">Оформить заказ</Button>

          </div>
        </Container>
      </MainPage>
    </>
  );
};

export default Card;
