import React from 'react'
import './Circle.css'

export const Circle = ({color = '#f1c40f#'}) => {
	return (
		<div className='circle' style={{backgroundColor: color}}>
		</div>
	)
}

