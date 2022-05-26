import React, { useState } from 'react'
import { Button, Alert, Form } from 'react-bootstrap'
import Footer from '../components/Footer'
import axios from 'axios'
import user from '../store/user'
import role from '../store/role'
const Signin = () => {
	const [opened, setOpened] = useState()
	const [showSignIn, setShowSignIn] = useState(false)
	const [showError, setShowError] = useState(false)
	const [textError, setTextError] = useState('')

	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')

	const [loginInvalid, setLoginInvalid] = useState(false)
	const [passwordInvalid, setPasswordInvalid] = useState(false)

	const [error, setError] = useState(null)

	const toggle = () => setOpened(value => !value)

	const onSignin = async () => {
		setLoginInvalid(false)
		setPasswordInvalid(false)
		setError(null)

		if (!login || !password) {
			if (!login) setLoginInvalid(true)
			if (!password) setPasswordInvalid(true)
			alert('Ошибка ввода. Введите данные')
			return
		}

		if (login === '' || password === '') {
			if (login === '') setLoginInvalid(true)
			if (password === '') setPasswordInvalid(true)
			return
		}

		const body = JSON.stringify({ login, password })
		const data = await axios
			.post(`http://localhost:8080/users/login`, body, {
				headers: { 'content-Type': 'application/json' },
			})
			.then(response => {
				console.log(response.data.role, response.data.id)
				user.setAuth(response.data.role, response.data.id)
				console.log(response.data)
				setShowSignIn(false)
				setShowError(false)
				setLogin('')
				setPassword('')
				role.getRole()
				console.log(role.getRole())
			})
			.catch(err => {
				setTextError(err.response)
				setShowError(true)
			})
		localStorage.setItem(data)
	}
	const handleOnChange = event => {
		setLogin(event.target.value)
	}
	const handleOnChange1 = event => {
		setPassword(event.target.value)
	}

	return (
		<>
			{error && (
				<div>
					<Alert color='danger' toggle={() => setError(null)}>
						{error}
					</Alert>
				</div>
			)}

			<Form
				style={{
					padding: '10px',
					marginTop: '10%',
					marginBottom: '10%',
					border: 'solid 1px',
					display: 'inline-block',
					width: '700px',
				}}
			>
				<Form.Group>
					<Form.Label>Почта</Form.Label>
					<Form.Control
						type='text'
						placeholder='Введите логин'
						value={login}
						onChange={event => handleOnChange(event)}
						invalid={loginInvalid}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Label>Пароль</Form.Label>
					<Form.Control
						type='password'
						placeholder='Введите пароль'
						value={password}
						onChange={event => handleOnChange1(event)}
						invalid={passwordInvalid}
					/>
				</Form.Group>
				<Button
					style={{ marginTop: '20px' }}
					variant='success'
					type='submit'
					onClick={onSignin}
				>
					Войти
				</Button>
			</Form>
			<Footer />
		</>
	)
}
export default Signin
