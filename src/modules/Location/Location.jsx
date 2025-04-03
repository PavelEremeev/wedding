import React from 'react'
import { Button } from '../../components/Button/Button'
import { Text } from '../../components/Text/Text'

import line from '../../images/line_2.svg'
import locationOne from '../../images/rechnoy.jpg'
import locationTwo from '../../images/veranda.jpg'

import Flower from '../../components/Flower/Flower'
import { Furshet } from '../../components/Furshet/Furshet'
import Image from '../../components/Image/Image'
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
			<Flower marginTop={100}/>
			<Text size='l' marginTop={50} titleFont>21.06.25</Text>
			<img src={line} alt={line} className='line__img'/>
			{/* <Image src={line} className='line__img'/> */}
			<div className='location__container'>
				<Text size='l' color='yellow' marginBottom={20} titleFont>ЛОКАЦИЯ</Text>
					<Text>
						Наша роспись пройдет в здании Северного речного вокзала
					</Text>
				<Line/>

				<Image src={locationOne} marginBottom={10} marginTop={20}/>
				<Text  marginBottom={20}  marginTop={10}>
					адрес: Москва, Ленинградское шоссе, 51
				</Text>
				<Button onClick={handleOpenMarry}>Открыть карту</Button>

				<Text size='l' color='yellow' marginBottom={20} marginTop={60} titleFont>ТАЙМИНГ</Text>
					<Text>
						21 : 15 - торжественная церемония
					</Text>
			</div>

			<Flower marginTop={100}/>
			<Text size='l' marginTop={50} titleFont>22.06.25</Text>
			<img src={line} alt={line} className='line__img rotate180'/>
			<div className='location__container'>
				<Text size='l' color='yellow' marginBottom={20} titleFont>ЛОКАЦИЯ</Text>
					<Text>
						Наша свадебная вечеринка пройдет в Усадьбе "Лесной берег"
					</Text>
				<Line/>
				
				<Image src={locationTwo} marginBottom={10} marginTop={20}/>
				<Text  marginBottom={20}  marginTop={10}>
					адрес: Москва, пос. Новобутаково, 44
				</Text>
				<Button onClick={handleOpenParty}>Открыть карту</Button>

				<Text size='l' color='yellow' marginBottom={30} marginTop={60} titleFont>ТАЙМИНГ</Text>
					<Furshet/>
					<Text marginTop={30}>
						16 : 00 - 17 : 00 - сбор гостей
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