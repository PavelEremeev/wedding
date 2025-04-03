import React from 'react'
import { Circle } from '../../components/Circle/Circle'
import { Text } from '../../components/Text/Text'
import './Dresscode.css'

export const Dresscode = () => {

	const colors = ['#e7ded3', '#c1bcb5', '#999999', '#ffe27c', '#e8b634', '#c9b6a1' ]

	return (
		<div className='dresscode'> 
			<div className='dresscode__container'>
				<Text size='l' color='yellow' titleFont>
					ДРЕСС-КОД
				</Text>

				<Text marginTop={30}>
					Для нас главное — Ваше присутствие, но будем благодарны, если при выборе нарядов на наше торжество вы откажетесь от ярких принтов и поддержите выбранную цветовую гамму:
				</Text>

				<div className='dresscode-colors__container'>
					{colors.map((element, i) => <Circle color={element} key={i}/>)}
				</div>
				
			</div>
		</div>
	)
}

