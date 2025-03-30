import React from 'react'
import { Line } from '../../components/Line/Line'
import { Text } from '../../components/Text/Text'
import './Details.css'
export const Details = () => {
	return (
		<div className='details'>
			<div className='details__container'>
				<Text size='l' color='yellow'>ДЕТАЛИ ТОРЖЕСТВА</Text>
				<Text marginBottom={30} marginTop={30}>
					Не ломайте голову над подарком - мы будем рады любой классной сумме в конверте, которая поможет осуществить наши мечты!
				</Text>
				<Line/>
				<Text marginBottom={30} marginTop={30}>
					Мы будем рады, если вместо цветов Вы решите подарить нам бутылочку вина с пожеланием, когда нам её открыть
				</Text>
				<Line/>
				<Text marginBottom={30} marginTop={30}>
					Мы  хотим чтобы все гости в полной мере насладились праздником, поэтому обращаем Ваше внимание, что ждем гостей возраста 18+
				</Text>
			</div>
		</div>
	)
}
