import React from 'react'
import { Button } from 'react-bootstrap'
import { Container, Row, Col, Card } from 'react-bootstrap'
import Footer from '../components/Footer'

function Cabinet() {
	return (
		<>
		<Container style={{marginBottom:'15vh'}} className='mt-3'>
			<h1>Личный кабинет</h1>
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
						<h2>Имя</h2>
						<h2>Фамилия</h2>
						<h2>Отчество</h2>
						<h2>Почта</h2>
					</Card>
				</Col>
			</Row>
		</Container>
		<Footer />
		</>
	)
}

export default Cabinet
