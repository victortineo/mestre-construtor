import React from 'react'
import './circularIcon.scss'

const CircularIcon = (props) => {
	return (
		<div className="circularIcon">
		{console.log(props.image)}
			<span className="circularIcon__icon" style={{'backgroundImage': `url(${props.image})`}}></span>
		</div>
	)
}

export default CircularIcon