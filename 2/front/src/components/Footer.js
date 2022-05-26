import React from 'react'
import { Navbar,Col,Row,Container } from 'react-bootstrap'
const Footer = () => {
  return (
    <footer>
      <Navbar bg='dark' className='text-light'>
        <Container className='d-flex flex-column pt-4 pb-4'>
        <Row className='gap-5 fs-5'>
          <Col>git</Col>
          <Col>git</Col>
          <Col>git</Col>
        </Row>
        <Row>
        <h5 className='pt-4 pb-4'>Copyright 2022</h5>
        </Row>
        </Container>
      </Navbar>
    </footer>
  )
}

export default Footer