import React from 'react'
import { Card, Col } from 'react-bootstrap'

function Kard(props) {
	const [isAded, setIsAded] = React.useState(false)

	return (
		<Col md={3} className={'mt-3'}>
			<a style={{ textDecoration: 'none', color: '#000' }} href={props.url}>
				<Card style={{ width: '18rem' }}>
					<Card.Img variant='top' src={props.img} />
					<Card.Body>
						<Card.Title>{props.title}</Card.Title>
						<Card.Text>{props.text}</Card.Text>
					</Card.Body>
				</Card>
			</a>
		</Col>
	)
}
export default Kard
