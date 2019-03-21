import React from 'react'
import './header.scss'

const Header = () => {
	return (
		<header className="header">
			<a href="/" className="header__logo">Mestre Construtor</a>
			<nav className="header__items">
				<a href="#" className="header__item">Benefícios</a>
				<a href="#" className="header__item">Porque o Mestre Construtor</a>
				<a href="#" className="header__item">Nossos vídeos</a>
				<a href="#" className="header__item">Torne-se um mestre construtor</a>
			</nav>
		</header>
	)
}

export default Header