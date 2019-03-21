import React from 'react'
import './contentText.scss'

const contentText = (props) => {
	return (
		<div className="contentText">
			<h3 className="contentText__title">{props.title}</h3>
			{props.hasSeparator && (
				<div className="contextText__separator">{props.separatorIcon}</div>
			)}
			<p className="contentText__text">{props.text}</p>
		</div>
	)
}

export default contentText