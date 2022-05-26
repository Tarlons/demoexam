import React from 'react'
import { Container } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

function Footer() {
	return (
		<div style={{ backgroundColor: '#f8f9fa' }}>
			<Container
				style={{
					height: '50%',
					width: '60%',
					float: 'center',
					paddingTop: '2%',
					paddingBottom: '3%',
				}}
			>
				<Row>
					<Col
						className='mt-5'
						style={{
							float: 'left',
							color: '#000',
							fontSize: '5px',
							paddingRight: '15%',
						}}
					>
						<h5
							style={{
								float: 'left',
								fontSize: '17px',
							}}
							className='ms-5'
						>
							г. Иваново, ул. Шевченко, д. 2.
						</h5>
						<h5
							style={{
								float: 'left',
								fontSize: '17px',
							}}
							className='ms-5'
						>
							Телефон: +7 930 341 84 61
						</h5>
					</Col>

					<Col className='mt-5'>
						<a href=''></a>
						<a href=''></a>
					</Col>
					<Col
						className='mt-5'
						style={{ float: 'right', color: '#fff', fontSize: '5px' }}
					>
						<h5
							style={{
								float: 'right',
								color: '#000',
								fontSize: '17px',
							}}
							className='ms-5'
						>
							Email: 123@inbox.ru
						</h5>
					</Col>
				</Row>
			</Container>
		</div>
	)
}
export default Footer
