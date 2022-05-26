import React from 'react'
import { Tab, Tabs, Button, Container } from 'react-bootstrap'
import Footer from '../components/Footer'

function Admin() {
	return (
		<>
		<div style={{ color: '#000', marginBottom:'50vh' }}>
			<div>
				<Tabs
					style={{ paddingTop: '3%', paddingLeft: '3%' }}
					defaultActiveKey='profile'
					transition={false}
					id='noanim-tab-example'
					className='mb-3'
				>
					<Tab eventKey='home' title='Заказы'>
						<span>Упорядочить заказы по:</span>
						<div>
							<Button variant='outline-dark'>Новые</Button>
							<Button variant='outline-dark'>Подтвржденные</Button>
							<Button variant='outline-dark'>Отменённые</Button>
						</div>
					</Tab>
					<Tab eventKey='profile' title='Категории'>
						<div
							style={{
								textAlign: 'right',
								paddingRight: '5%',
								paddingBottom: '1%',
							}}
						>
							<Container className='d-flex flex-column'>
								<Button variant={'outline-dark'} className='mt-4 p-2'>
									Добавить категорию
								</Button>
								<Button variant={'outline-dark'} className='mt-4 p-2'>
									Удалить категорию
								</Button>
							</Container>
						</div>
					</Tab>
					<Tab eventKey='contact' title='Товары'>
						<div
							style={{
								textAlign: 'right',
								paddingRight: '5%',
								paddingBottom: '1%',
							}}
						>
							<Container className='d-flex flex-column'>
								<Button variant={'outline-dark'} className='mt-4 p-2'>
									Добавить товар
								</Button>
								<Button variant={'outline-dark'} className='mt-4 p-2'>
									Удалить товар
								</Button>
								<Button variant={'outline-dark'} className='mt-4 p-2'>
									Редактировать товар
								</Button>
							</Container>
						</div>
					</Tab>
				</Tabs>
			</div>
		</div>
		<Footer />
		</>
	)
}

export default Admin
