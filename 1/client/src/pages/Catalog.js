import React from 'react'
import 'bootstrap'
import { Container, Button, Tabs, Tab, Row } from 'react-bootstrap'
import Kard from '../components/Kard'
import Footer from '../components/Footer'

function Catalog() {
	return (
		<>
			<Container style={{marginBottom:'10vh'}}>
				<div className='search d-flex justify-between mt-10 mr-10'>
					<div className='filter d-flex justify-between align-center'>
						<span className='arrange'>Упорядочить товары по:</span>
						<div>
							<Button variant='outline-secondary'>Цена (Дорогие)</Button>
							<Button variant='outline-secondary'>Цена (Дешевые)</Button>
							<Button variant='outline-secondary'>Название (А-Я)</Button>
							<Button variant='outline-secondary'>Название (Я-А)</Button>
						</div>
					</div>
				</div>
				<Tabs variant='pills' defaultActiveKey='one' className='mb-3'>
					<Tab eventKey='one' title='one'>
						<Row className='d-flex'>
							<Kard
								url='/product'
								img='/img/1.png'
								title='1'
								text='2500 руб.'
							/>
						</Row>
					</Tab>
					<Tab eventKey='two' title='two'>
						<Row className='d-flex'>
							<Kard
								url='/secondproduct'
								img='/img/1.png'
								title='2'
								text='2500 руб.'
							/>
						</Row>
					</Tab>
					<Tab eventKey='three' title='three'>
						<Row className='d-flex'>
							<Kard
								url='/product'
								img='/img/1.png'
								title='3'
								text='2500 руб.'
							/>
						</Row>
					</Tab>
				</Tabs>
			</Container>
			<Footer/>
		</>
	)
}

export default Catalog
