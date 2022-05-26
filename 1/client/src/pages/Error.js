import React from 'react'
import { Alert, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Error() {
	return (
		<Container
			style={{
				marginTop: '13%',
				marginBottom: '12%',
			}}
		>
			<Alert variant='danger' className='m-5'>
				<Alert.Heading>Вы посетили нерабочую ссылку</Alert.Heading>
				<p>
					Перейдите на <Link to='/'>главную</Link>
				</p>
			</Alert>
		</Container>
	)
}

export default Error
