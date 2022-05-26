import React from 'react'
import { Button } from 'react-bootstrap'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../components/Footer'

function Product() {
	return (
		<>
		<Container className='mt-3'>
			<Row className='d-flex align-items-center justify-content-around'>
				<Col md={4}>
					<img width={300} height={300} src='/img/24.jpg' />
				</Col>
				<Col md={4}>
					<Card
						className='d-flex flex-column align-items-center justify-content-around'
						style={{
							width: 300,
							height: 300,
							fontSize: 32,
							border: '5px solid lightgray',
						}}
					>
						<h2>1имя</h2>
						<h3>1цена</h3>
						<Button variant={'outline-dark'}>Добавить в корзину</Button>
					</Card>
				</Col>
			</Row>
			<Row className='d-flex flex-column m-3'>
				<h1>Характеристики</h1>
				<Row
					style={{
						background: '#f8f9fa',
						padding: 10,
					}}
				>
					123: 321
				</Row>
				<Row
					style={{
						background: 'transparent',
						padding: 10,
					}}
				>
					123: 321
				</Row>
				<Row
					style={{
						background: '#f8f9fa',
						padding: 10,
					}}
				>
					123: 321
				</Row>
			</Row>
		</Container>
		<Footer />
		</>
	)
}
export default Product
