import React from 'react'
import { Button } from '../../components/Button/Button'
import { Text } from '../../components/Text/Text'
import flower from '../../images/flower.png'
import furshet from '../../images/furshet.png'

import line from '../../images/line_2.svg'
import locationOne from '../../images/rechnoy.jpg'
import locationTwo from '../../images/veranda.jpg'

import { Line } from '../../components/Line/Line'
import './Location.css'

export const Location = () => {

	const handleOpenMarry = () => {
		window.open ('https://yandex.ru/maps/-/CHRsqEp1', '_blank')
	}

	const handleOpenParty = () => {
		window.open ('https://yandex.ru/maps/-/CHRw5N~U', '_blank')
	}


	return (
		<div className='location'>
			<img src={flower} alt={flower} className='flower__img'/>
			<Text size='l' marginTop={50}>21.06.25</Text>
			<img src={line} alt={line} className='line__img'/>
			<div className='location__container'>
				<Text size='l' color='yellow' marginBottom={20}>ЛОКАЦИЯ</Text>
					<Text>
						Наша роспись пройдет в здании Северного речного вокзала
					</Text>
				<Line/>
				<Text  marginBottom={10}  marginTop={10}>
					адрес: Москва, Ленинградское шоссе, 51
				</Text>
				<img  src={locationOne} alt={locationOne} className='location__img'/>
				<Button onClick={handleOpenMarry}>Открыть карту</Button>

				<Text size='l' color='yellow' marginBottom={20} marginTop={60}>ТАЙМИНГ</Text>
					<Text>
						21 : 15 - торжественная церемония
					</Text>
			</div>

			<img src={flower} alt={flower} className='flower__img'/>
			<Text size='l' marginTop={50}>22.06.25</Text>
			<img src={line} alt={line} className='line__img rotate180'/>
			<div className='location__container'>
				<Text size='l' color='yellow' marginBottom={20}>ЛОКАЦИЯ</Text>
					<Text>
						Наша свадебная вечеринка пройдет в Усадьбе "Лесной берег"
					</Text>
				<Line/>
				<Text  marginBottom={10}  marginTop={10}>
					адрес: Москва, пос. Новобутаково, 44
				</Text>
				<img  src={locationTwo} alt={locationTwo} className='location__img'/>
				<Button onClick={handleOpenParty}>Открыть карту</Button>

				<Text size='l' color='yellow' marginBottom={30} marginTop={60}>ТАЙМИНГ</Text>
					<img src={furshet} alt={furshet} className='timing__img'/>
					<Text marginTop={20}>
						16 : 00 - 17 : 00 - СБОР ГОСТЕЙ
					</Text>
					<Text size='s' color='yellow' marginBottom={10}>
						фуршет, общение, фотки
					</Text>
					
					<Text marginTop={30}>
						17 : 00 - 22 : 00 - вечериночка
					</Text>
					<Text size='s' color='yellow' marginBottom={10}>
						веселье, поздравления, тортик
					</Text>

					<Text marginTop={30}>
						22 : 00 - 23 : 00 - афтепати
					</Text>
					<Text size='s' color='yellow' marginBottom={10}>
						песни, танцы
					</Text>
			</div>
		</div>
	)
}