import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MainPage from '../layout/MainPage'

const About = () => {
  return (
    <>
      <MainPage>
        <Container className='border border-4'>
          <Row>
            <Col>
              <h3>О компании</h3>
              <h4 className='pt-3'>Адресс</h4>
              <h4>Емейл</h4>
              <h4>Телефон</h4>
            </Col>
            <Col>
              <h5>Карта</h5>
            </Col>
          </Row>
        </Container>
      </MainPage>
    </>
  )
}

export default About