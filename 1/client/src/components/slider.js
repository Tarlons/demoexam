import { Carousel, Container } from 'react-bootstrap'
import React from 'react'

function Slider() {
	return (
		<Container
			style={{
				height: '60%',
				width: '100%',
				float: 'center',
				paddingTop: '1%',
			}}
		>
			<Carousel prefix=''>
				<Carousel.Item>
					<a href='/catalog'>
						<img src='/img/slider.jpg' alt='First slide' />
					</a>
				</Carousel.Item>
				<Carousel.Item>
					<a href='/catalog'>
						<img src='/img/slider.jpg' alt='First slide' />
					</a>
				</Carousel.Item>
			</Carousel>
		</Container>
	)
}

export default Slider
