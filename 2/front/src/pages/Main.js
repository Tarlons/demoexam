import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import MainPage from '../layout/MainPage'


const Main = () => {
  return (
      <MainPage>
       <Carousel variant='dark' className='text-center'>
         <Carousel.Item>
           <img alt='a' src='/img/print_2.jpg' width={400}/>
         </Carousel.Item>
         <Carousel.Item>
           <img alt='a' src='/img/print_3.jpg' width={400}/>
         </Carousel.Item>
       </Carousel>
      <Container>
      <Row className='text-center'>
         <Col className='m-auto'><img width={400} src='/img/print_2.jpg' alt='a'/></Col>
         <Col className='m-auto'>asdasd</Col>
       </Row>
       <Row className='text-center'>
         <Col className='m-auto'>asdasdas</Col>
         <Col className='m-auto'><img width={400} src='/img/print_2.jpg' alt='a'/></Col>
       </Row>
      </Container>
      </MainPage>
  )
}

export default Main