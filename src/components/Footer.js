import React from 'react'
import './footer.scss'
import logo from '../assets/images/logo.png'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="foolter__col">
				<img src={logo} alt='logo mestre' />
			</div>
			<div className="foolter__col">
				<h2 className="footer__title">O Site</h2>
				<ul className="footer__list">
					<li className="footer__item"><a href="#beneficios">Benefícios</a></li>
					<li className="footer__item"><a href="#porque">Porque a Mestre Construtor</a></li>
					<li className="footer__item"><a href="#videos">Conheça nosso canal</a></li>
					<li className="footer__item"><a href="#torne-se">Torne-se um Mestre Construtor</a></li>
					<li className="footer__item"><a href="#duvidas">Tire duas dúvidas</a></li>
				</ul>
			</div>
			<div className="foolter__col">
				<h2 className="footer__title">Materiais</h2>
				<ul className="footer__list">
					<li className="footer__item">
						<span className="footer__material-icon"></span>
						<a className="footer__material" href="#"></a>
					</li>
					<li className="footer__item">
						<span className="footer__material-icon"></span>
						<a className="footer__material" href="#"></a>
					</li>
				</ul>
			</div>
			<div className="foolter__col">
				<h2 className="footer__title">Saiba Mais</h2>
				<p className="footer__knowMore">
					Receba mais informações sobre ser um Mestre Construtor, deixe seu número:
				</p>
			</div>
		</footer>
	)
}

export default Footer