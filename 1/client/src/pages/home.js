import React from 'react'
import Slider from '../components/slider'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../components/Footer'

function Home() {
	return (
		<>
			<Slider />
			<Container
				style={{
					height: '50%',
					width: '60%',
					float: 'center',
					paddingTop: '2%',
					paddingBottom: '5%',
				}}
			>
				<Row>
					<Col className='mt-5'>
						<h5
							style={{
								float: 'center',
								fontFamily: 'Montserrat',
								paddingTop: '4%',
							}}
						>
							РАБОТАЕМ КРУГЛОСУТОЧНО
						</h5>
					</Col>
					<Col className='mt-5'>
						<h5
							style={{
								float: 'center',
								fontFamily: 'Bungee Inline',
								paddingTop: '4%',
							}}
						>
							СВЕЖИЕ ЦВЕТЫ
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
							ДОВОЛЬНЫЕ ПОКУПАТЕЛИ
						</h5>
					</Col>
					<Col className='mt-5'>
						<h5
							style={{
								float: 'center',
								fontFamily: 'Bungee Inline',
								paddingTop: '4%',
							}}
						>
							ВЫГОДНАЯ ЦЕНА{' '}
						</h5>
					</Col>
				</Row>
			</Container>
			<Footer />
		</>
	)
}
export default Home
