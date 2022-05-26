import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../components/Footer'

function Cart() {
	return (
		<>
		<Container style={{marginBottom:'60vh'}} className='text-center min_height'>
			<h3 className='pt-4'>Корзина</h3>
			<div className='pt-4'>
				<h4>Вы не добавили товар...</h4>
			</div>
		</Container>
		<Footer />
		</>
	)
}

export default Cart
