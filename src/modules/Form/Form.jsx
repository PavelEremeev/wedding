import React from 'react'
import { Button } from '../../components/Button/Button'
import Flower from '../../components/Flower/Flower'
import { Text } from '../../components/Text/Text'
import './Form.css'

const Form = () => {

	const handleOpenForm = () => {
		window.open ('https://forms.yandex.ru/u/67ed802984227c38c82d009c/', '_blank')
	}

	return (
		<div className='form'>
			<div className='form__container'>
				<Text titleFont size='l' color='yellow'>
					Анкета
				</Text>
				<Text marginTop={30} marginBottom={10}>
					Ваши ответы очень помогут нам подготовиться к торжеству!
				</Text>
				<Text  marginBottom={20}>
					Пожалуйста, заполните эту анкету как можно раньше! (До 20.05.25)
				</Text>
				<Button onClick={handleOpenForm}>Открыть форму</Button>

				<Flower marginTop={50} marginBottom={30}/>
				<Text titleFont size='l' color='yellow' marginTop={20} marginBottom={50}>До встречи!</Text>
			</div>
		</div>
	)
}

export default Form
