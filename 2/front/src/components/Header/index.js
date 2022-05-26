import { observer } from 'mobx-react'
import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../store/auth'
import ModalAuth from './ModalAuth'

const Header = () => {
	const navigate = useNavigate()
	return (
		<header>
			<Navbar bg='dark' expand='md'>
				<Container>
					<Navbar.Brand className='text-light fs-2'>Print Tru</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className='gap-4 ms-5 fs-5'>
						<Nav>
							<Link className='text-decoration-none text-light' to='/'>
								Главная
							</Link>
						</Nav>
						<Nav>
							<Link className='text-decoration-none text-light' to='/catalog'>
								Каталог
							</Link>
						</Nav>
						<Nav>
							<Link className='text-decoration-none text-light' to='/about'>
								Где нас найти
							</Link>
						</Nav>
						<div className='ms-auto d-flex gap-3'>
							{auth.user ? (
								<>
									<Button onClick={() => navigate('/cabinet')} variant='light'>
										Личный кабинет
									</Button>
									<Button onClick={() => navigate('/cart')} variant='light'>
										Корзина
									</Button>
									<Button
										variant='light'
										href='/'
										onClick={() => auth.delUser()}
									>
										Выход
									</Button>
								</>
							) : (
								<ModalAuth />
							)}
						</div>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	)
}

export default observer(Header)
