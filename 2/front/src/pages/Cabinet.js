import React from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import MainPage from '../layout/MainPage'

const Cabinet = () => {
  return (
    <>
      <MainPage>
      <Container>
          <h4 className="text-center pt-3 pb-3">Корзина</h4>
          <Table className="text-center fs-5">
            <thead>
              <tr>
                <th>Дата</th>
                <th>Товары</th>
                <th>Статус</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>22.22.22</td>
                <td>
                  <h5>Canon-1</h5>
                  <h5>Cads-2</h5>
                </td>
                <td>
                  <h5>Новый</h5>
                  <Button variant='dark'>Удалить</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </MainPage>
    </>
  )
}

export default Cabinet