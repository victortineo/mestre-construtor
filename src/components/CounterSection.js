import React from 'react'
import './counterSection.scss'
import CountTo from 'react-count-to';


const CounterSection = (props) => {
	return (
		<div key={props.id} id={`counterSection_${props.id}`} className="counterSection">
			<span className="counterSection__icon" style={{'backgroundImage': `url(${props.image})`}}></span>
			<p className="counterSection__number">
				<CountTo to={parseInt(props.number)} speed={1234} />
			</p>
			<p className="counterSection__text">{props.title}</p>
		</div>
	)
}

export default CounterSection