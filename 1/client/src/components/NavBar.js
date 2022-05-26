import React from 'react'
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import user from '../store/user'
import role from '../store/role'
import { Link } from 'react-router-dom'
function NavBar() {
	const handleClickExit = () => user.delAuth()

	return (
		<>
			<Navbar bg='light' expand='lg'>
				<Container>
					<Navbar.Brand>
						<a href='/'>
							<img
								style={{ paddingLeft: '30%' }}
								height='70'
								src='/img/logo.png'
								alt='Logo'
							/>
						</a>
					</Navbar.Brand>
					<Navbar.Brand
						className='ms-4'
						style={{ fontFamily: 'Roboto' }}
						href='/'
					>
						Название
					</Navbar.Brand>
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link
								className='ms-4'
								style={{ color: '#000', fontSize: '20px' }}
								href='/'
							>
								Главная
							</Nav.Link>
							<Nav.Link
								className='ms-4'
								style={{ color: '#000', fontSize: '20px' }}
								href='/catalog'
							>
								Каталог
							</Nav.Link>
							<Nav.Link
								className='ms-4'
								style={{ color: '#000', fontSize: '20px' }}
								href='/where'
							>
								Где нас найти
							</Nav.Link>
						</Nav>
						{!user.auth ? (
							<>
								<Button
									href='signin'
									variant='outline-success'
									style={{
										marginRight: '1%',
										textAlign: 'center',
										fontSize: '20px',
									}}
								>
									Войти
								</Button>
								<Button
									href='/signup'
									variant='danger'
									style={{
										marginRight: '1%',
										textAlign: 'center',
										fontSize: '20px',
									}}
								>
									Регистрация
								</Button>
							</>
						) : (
							<>
							<Link
										style={{
											textDecoration: 'none',
											whiteSpace: 'nowrap',
											marginRight:'15px'
										}}
										to='/cabinet'
										variant='light'
									>
										<Button variant='outline-secondary'>Личный кабинет</Button>
									</Link>
								{!role.isAdmin && (
									<Link
										style={{
											textDecoration: 'none',
											whiteSpace: 'nowrap',
											background: '#e8c39b',
										}}
										to='/cart'
										variant='light'
									>
										<Button variant='secondary'>Корзина</Button>
									</Link>
								)}
								{role.isAdmin && (
									<Link to='/admin' className='ms-4'>
										<Button
											className='text-white'
											variant='secondary'
										>
											Админ панель
										</Button>
									</Link>
								)}
								<>
									<Button
										href='/'
										style={{
											textDecoration: 'none',
											whiteSpace: 'nowrap',
										}}
										variant='danger'
										className='ms-4'
										onClick={handleClickExit}
									>
											Выйти
									</Button>
								</>
							</>
						)}
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default NavBar
