import React from 'react'
import line from '../../images/line_1.svg'
import './Line.css'
export const Line = ({width}) => {
	return (
		<img src={line} alt={line} className='line' style={{width: width}}/>
	)
}
