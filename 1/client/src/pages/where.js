import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer'

function Contacts() {
	return (
		<>
			<h1
				style={{
					color: '#000',
					paddingTop: '2%',
					fontFamily: 'Bungee Inline',
				}}
			>
				КОНТАКТЫ
			</h1>
			<Container
				style={{
					height: '50%',
					width: '60%',
					float: 'center',
					paddingTop: '2%',
					paddingBottom: '2%',
				}}
			>
				<Row>
					<Col className='mt-5'>
						<h5
							style={{
								float: 'center',
								paddingTop: '4%',
							}}
						>
							+7 930 341 84 61
						</h5>
					</Col>
					<Col className='mt-5'>
						<h5
							style={{
								float: 'center',
								paddingTop: '4%',
							}}
						>
							г. Иваново, ул. Шевченко, д. 2.
						</h5>
					</Col>
				</Row>
				<Row>
					<Col className='mt-5'>
						<h5
							style={{
								float: 'center',
								fontFamily: 'Bungee Inline',
								paddingTop: '4%',
							}}
						>
							123@inbox. ru
						</h5>
					</Col>
					<Col className='mt-5'>
						<a href='https://vk.com/roza5080'></a>
						<a href='https://www.instagram.com/cvetochnidomik/'></a>
						<h5
							style={{
								float: 'center',
								paddingTop: '4%',
							}}
						>
							Соц. сети
						</h5>
					</Col>
				</Row>
			</Container>
			<Container style={{ paddingBottom: '2%' }}>
				<Row>
					<Col className='mt-5'>
						<img src='/img/cvet1.jpg' />
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}

export default Contacts
