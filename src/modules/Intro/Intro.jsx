import React from 'react'
import lefthand from '../../images/lefthand.svg'
import righthand from '../../images/righthand.svg'
import './Intro.css'

export const Intro = () => {
	return (
		<div className='intro'>
			<div className='intro__img-container'>
				<img src={lefthand} alt={lefthand} className='lefthand'/>
				<img src={righthand} alt={righthand} className='righthand'/>
			</div>
			<div>
				<h2 className='name'> Павлик-козявлик</h2>
				<h2 className='name'>и Ирина-свинина</h2>
				<h5 className='date'>21 июня 2025</h5>
				<h5 className='date'>- 22 июня 2025</h5>
			</div>
		</div>
	)
}

