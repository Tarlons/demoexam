import React, { useState } from 'react'
import { Button, Alert, Form } from 'react-bootstrap'
import Footer from '../components/Footer'

const Signup = () => {
	const [decision, setDecision] = useState(false)

	const [name, setName] = useState('')
	const [surname, setSurname] = useState('')
	const [patr, setPatr] = useState('')
	const [login, setLogin] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeetpassword, setRepeetpassword] = useState('')

	const [nameInvalid, setNameInvalid] = useState(false)
	const [surnameInvalid, setSurnameInvalid] = useState(false)
	const [loginInvalid, setLoginInvalid] = useState(false)
	const [emailInvalid, setEmailInvalid] = useState(false)
	const [passwordInvalid, setPasswordInvalid] = useState(false)
	const [repeetpasswordInvalid, setRepeetpasswordInvalid] = useState('')

	const [error, setError] = useState(null)

	const toggle = () => value => !value

	const onSignup = async () => {
		setEmailInvalid(false)
		setPasswordInvalid(false)
		setRepeetpasswordInvalid(false)
		setNameInvalid(false)
		setSurnameInvalid(false)
		setLoginInvalid(false)
		setError(null)

		if (
			!name ||
			!surname ||
			!patr ||
			!login ||
			!email ||
			!password ||
			!repeetpassword
		) {
			if (!name) setNameInvalid(true)
			if (!surname) setSurnameInvalid(true)
			if (!login) setLoginInvalid(true)
			if (!email) setEmailInvalid(true)
			if (!password) setPasswordInvalid(true)
			if (!repeetpassword) setRepeetpasswordInvalid(true)

			alert('Ошибка ввода. Заполните все обязательные поля')
			return
		}

		const data = await fetch('http://localhost:8080/users/signup', {
			method: 'POST',
			headers: { 'content-Type': 'application/json' },
			body: JSON.stringify({ name, surname, patr, login, email, password }),
		})
		const dataJSON = await data.json()
		if (!dataJSON.success) {
			alert(dataJSON.code)
		} else {
			setDecision(true)
			alert(
				'Вы зарегистрировались. Можете войти в систему под своим логином и паролем!'
			)
		}
		toggle()
	}
	const handleOnChange = event => {
		setName(event.target.value)
	}
	const handleOnChange1 = event => {
		setSurname(event.target.value)
	}
	const handleOnChange2 = event => {
		setPatr(event.target.value)
	}
	const handleOnChange3 = event => {
		setLogin(event.target.value)
	}
	const handleOnChange4 = event => {
		setEmail(event.target.value)
	}
	const handleOnChange5 = event => {
		setPassword(event.target.value)
	}
	const handleOnChange6 = event => {
		setRepeetpassword(event.target.value)
	}
	const renderSignup = () => (
		<>
		<Form
			style={{
				padding: '10px',
				marginTop: '3%',
				marginBottom: '3%',
				border: 'solid 1px',
				display: 'inline-block',
				width: '700px',
			}}
		>
			<Form.Group>
				<Form.Label>Введите имя (Обязательное поле)</Form.Label>
				<Form.Control
					type='text'
					placeholder='Введите имя'
					value={name}
					onChange={event => handleOnChange(event)}
					invalid={nameInvalid}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Введите фамилию (Обязательное поле)</Form.Label>
				<Form.Control
					type='email'
					placeholder='Введите фамилию'
					value={surname}
					onChange={event => handleOnChange1(event)}
					invalid={surnameInvalid}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Введите отчество</Form.Label>
				<Form.Control
					type='text'
					placeholder='Введите отчество'
					value={patr}
					onChange={event => handleOnChange2(event)}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Введите логин (Обязательное поле)</Form.Label>
				<Form.Control
					type='text'
					placeholder='Введите логин'
					value={login}
					onChange={event => handleOnChange3(event)}
					invalid={loginInvalid}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Введите почту (Обязательное поле)</Form.Label>
				<Form.Control
					type='email'
					placeholder='Введите почту'
					value={email}
					onChange={event => handleOnChange4(event)}
					invalid={emailInvalid}
				/>
			</Form.Group>

			<Form.Group>
				<Form.Label>Введите пароль (Обязательное поле)</Form.Label>
				<Form.Control
					type='password'
					placeholder='Введите пароль'
					value={password}
					onChange={event => handleOnChange5(event)}
					invalid={passwordInvalid}
				/>
			</Form.Group>
			<Form.Group>
				<Form.Label>Повторите пароль (Обязательное поле)</Form.Label>
				<Form.Control
					type='password'
					placeholder='Введите пароль ещё раз'
					value={repeetpassword}
					onChange={event => handleOnChange6(event)}
					invalid={repeetpasswordInvalid}
				/>
			</Form.Group>
			<div className='d-flex justify-content-center'>
				<Form.Check />
				<p style={{ marginLeft: '10px' }}>
					Я согласен(на) с правилами регистрации
				</p>
			</div>
			<Button variant='danger' type='submit' onClick={onSignup}>
				Зарегистрироваться
			</Button>
		</Form>
		<Footer />
		</>
	)
	

	return (
		<>
			{error && (
				<div>
					<Alert color='danger' toggle={() => setError(null)}>
						{error}
					</Alert>
				</div>
			)}

			{!decision && renderSignup()}
		</>
	)
}
export default Signup
