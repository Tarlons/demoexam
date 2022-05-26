import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import validator from 'validator'
import http from '../../http'
import auth from '../../store/auth'

const ModalAuth = () => {
	const [data, setData] = useState({ login: '', password: '' })
	const [dataReg, setDataReg] = useState({
		name: '',
		surname: '',
		patronymic: '',
		login: '',
		email: '',
		password: '',
	})
	const [passwordRep, setPasswordRep] = useState('')
	const [show, setShow] = useState(false)
	const [showReg, setShowReg] = useState(false)
	const fetchSignIn = () => {
		if (data.login.length < 3)
			return alert('Поле логин не должно быть 3 символов')
		if (data.password.length < 6) return alert('Пароль Мин 6 знаков')
		http
			.post('/user/signin', JSON.stringify(data))
			.then(values => {
				auth.addUser(values.data.token)
				setShow(false)
			})
			.catch(error => {
				alert(error.response.data.message)
			})
	}
	const fetchReg = () => {
		if (dataReg.name.length < 1) return alert('Поле имя не должно быть пустым')
		if (dataReg.surname.length < 1)
			return alert('Поле фамилия не должно быть пустым')
		if (dataReg.login.length < 3)
			return alert('Поле логин не должно быть меньше 3 символов')
		if (!validator.isEmail(dataReg.email)) return alert('Неверный формат email')
		if (dataReg.password.length < 6) return alert('Пароль Мин 6 знаков')
		if (passwordRep !== dataReg.password) return alert('Пароли не сопадают')
		http
			.post('/user/signup', JSON.stringify(dataReg))
			.then(() => {
				alert('Вы зарегестрированы, авторизируйтесь')
				setShowReg(false)
			})
			.catch(error => {
				alert(error.response.data.message)
			})
	}
	return (
		<>
			<Button onClick={() => setShow(true)} variant='light'>
				Авторизация
			</Button>
			<Button onClick={() => setShowReg(true)} variant='light'>
				Регистрация
			</Button>
			<Modal centered show={show} onHide={() => setShow(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Авторизация</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Label>Логин</Form.Label>
						<Form.Control
							value={data.login}
							onChange={e => setData({ ...data, login: e.target.value })}
						></Form.Control>
						<Form.Label>Пароль</Form.Label>
						<Form.Control
							type='password'
							value={data.password}
							onChange={e => setData({ ...data, password: e.target.value })}
						></Form.Control>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='light' onClick={() => setShow(false)}>
						Закрыть
					</Button>
					<Button variant='dark' onClick={() => fetchSignIn()}>
						Авторизироваться
					</Button>
				</Modal.Footer>
			</Modal>
			<Modal centered show={showReg} onHide={() => setShowReg(false)}>
				<Modal.Header closeButton>
					<Modal.Title>Регистрация</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Label>Имя</Form.Label>
						<Form.Control
							value={dataReg.name}
							onChange={e => setDataReg({ ...dataReg, name: e.target.value })}
						></Form.Control>
						<Form.Label>Фамилия</Form.Label>
						<Form.Control
							value={dataReg.surname}
							onChange={e =>
								setDataReg({ ...dataReg, surname: e.target.value })
							}
						></Form.Control>
						<Form.Label>Отчество</Form.Label>
						<Form.Control
							value={dataReg.patronymic}
							onChange={e =>
								setDataReg({ ...dataReg, patronymic: e.target.value })
							}
						></Form.Control>
						<Form.Label>Логин</Form.Label>
						<Form.Control
							value={dataReg.login}
							onChange={e => setDataReg({ ...dataReg, login: e.target.value })}
						></Form.Control>
						<Form.Label>Email</Form.Label>
						<Form.Control
							value={dataReg.email}
							onChange={e => setDataReg({ ...dataReg, email: e.target.value })}
						></Form.Control>
						<Form.Label>Пароль</Form.Label>
						<Form.Control
							type='password'
							value={dataReg.password}
							onChange={e =>
								setDataReg({ ...dataReg, password: e.target.value })
							}
						></Form.Control>
						<Form.Label>Повтор пароля</Form.Label>
						<Form.Control
							type='password'
							value={passwordRep}
							onChange={e => setPasswordRep(e.target.value)}
						></Form.Control>
						<Form.Check label='Согласие с правилами регистрации' />
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='light' onClick={() => setShowReg(false)}>
						Закрыть
					</Button>
					<Button variant='dark' onClick={() => fetchReg()}>
						Зарегестрироваться
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	)
}

export default ModalAuth
