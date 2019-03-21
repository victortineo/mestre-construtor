import React from 'react'
import './banner.scss'
import pedreiro from '../assets/images/pedreiro.png'
import pedrasFundo from '../assets/images/pedras-fundo.png'
import pedrasFrente from '../assets/images/pedras-frente.png'
import { Throttle } from 'react-throttle';


const moveBaner = (elm) => {
	const x = elm.clientX;
	const y = elm.clientY;
	const pedreiro = document.getElementsByClassName('banner__pedreiro')[0]
	const pedrasFrente = document.getElementsByClassName('banner__pedrasFrente')[0]
	const pedrasFundo = document.getElementsByClassName('banner__pedrasFundo')[0]
	const wrapper = document.getElementsByClassName('banner__wrapper')[0]
	const wrapperWidth = wrapper.offsetWidth;
	const wrapperHeight = wrapper.offsetHeight;
	pedreiro.style.transform = `translate(${(x / wrapperWidth * 10) -4}px, ${(y / wrapperHeight * 10)-20}px)`
	pedrasFrente.style.transform = `translate(${(x / wrapperWidth * 160) -4}px, ${(y / wrapperHeight * 160) -20}px)`
	pedrasFundo.style.transform = `translate(${(x / wrapperWidth) -4}px, ${(y / wrapperHeight) -4}px)`
}

const Banner = () => {
	return (
		<div className="banner">
			<Throttle time="200" handler="onMouseMove">
				<div className="banner__wrapper" onMouseMove={(e) => moveBaner(e)}>
					<img className="banner__pedrasFundo" src={pedrasFundo} alt=""/>
					<img className="banner__pedreiro" src={pedreiro} alt=""/>
					<img className="banner__pedrasFrente" src={pedrasFrente} alt=""/>
				</div>
			</Throttle>
		</div>
	)
}

export default Banner