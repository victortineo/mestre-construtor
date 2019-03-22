import React from 'react'
import './footer.scss'
import logo from '../assets/images/logo.png'
import {FaRegFilePdf, FaRegFileWord, FaYoutube} from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<div className="footer__col">
					<img className="footer__logo" src={logo} alt='logo mestre' />
					<p className="footer__intro">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					</p>
				</div>
				<div className="footer__col">
					<h2 className="footer__title">O Site</h2>
					<ul className="footer__list">
						<li className="footer__item"><a className="footer__item-text" href="#beneficios">Benefícios</a></li>
						<li className="footer__item"><a className="footer__item-text" href="#porque">Porque a Mestre Construtor</a></li>
						<li className="footer__item"><a className="footer__item-text" href="#videos">Conheça nosso canal</a></li>
						<li className="footer__item"><a className="footer__item-text" href="#torne-se">Torne-se um Mestre Construtor</a></li>
						<li className="footer__item"><a className="footer__item-text" href="#duvidas">Tire duas dúvidas</a></li>
					</ul>
				</div>
				<div className="footer__col">
					<h2 className="footer__title">Materiais</h2>
					<ul className="footer__list">
						<li className="footer__item footer__item--material">
							<span className="footer__material-icon"><FaRegFilePdf /></span>
							<a className="footer__material" href="#download">Download Technical Data</a>
						</li>
						<li className="footer__item footer__item--material">
							<span className="footer__material-icon"><FaRegFileWord /></span>
							<a className="footer__material" href="#download">Download Brochure 2</a>
						</li>
					</ul>
				</div>
				<div className="footer__col">
					<h2 className="footer__title">Saiba Mais</h2>
					<p className="footer__news">
						Receba mais informações sobre ser um Mestre Construtor, deixe seu número:
					</p>
				</div>
			</div>
			<div className="footer__bottom">
				<div className="footer__wrapper footer__wrapper--bottom">
					<div className="footer__col footer__col--bottom">
						<p className="footer__bottom-text">
							Desenvolvido por <a className="footer__layerUp" rel="noopener noreferrer" href="http://layerup.com.br" target="_blank">Layer Up</a>
						</p>
					</div>
					<div className="footer__col footer__col--bottom">
						<p className="footer__bottom-text footer__bottom-text--social">
							Acompanhe nosso canal no Youtube <FaYoutube />/<strong className="footer__strong">mestreconstrutor</strong>
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer