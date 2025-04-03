import React from 'react'
import Hearts from '../../components/Hearts/Hearts'
import { Text } from '../../components/Text/Text'
import jabs from '../../images/jabs.png'
import './Intro.css'

export const Intro = () => {
	return (
		<div className='intro'>
			<Hearts/>
			<div className='intro__container'>
				<Text size='xl' titleFont>Паша</Text>
				<Text size='xl' titleFont>+</Text>
				<Text size='xl' titleFont>Ира</Text>
				<Text marginTop={30}>21 - 22.06.25</Text>
			</div>
			<div className='intro__container'>
					<Text size='l' titleFont color='yellow'>IT IS WEDDING, MY DUDES! <img src={jabs} alt={jabs} className='intro__jabs'/></Text>
				<Text marginTop={30}>
				Это случилось! Дорогие наши друзья и родные, мы очень хотим разделить это событие вместе с вами, поэтому приглашаем вас на нашу свадьбу!
				</Text>
			</div>
		</div>
	)
}

