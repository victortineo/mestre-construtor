import React from 'react'
import './header.scss'
import {FaBars} from 'react-icons/fa'

class Header extends React.Component {
	state = {
		menuActive: false
	}
	toggleActive = () => {
		this.setState(current => ({
			menuActive: !current.menuActive
		}))
	}
	componentDidMount = () => {
		document.body.addEventListener('click', this.setInactive)
	}
	setInactive = (e) => {
        if (e && e.relatedTarget) {
            e.relatedTarget.click();
        }
        this.setState({
            menuActive: false
        })
	}
	render(){
		return (
			<header className="header">
				<a href="/" className="header__logo">Mestre Construtor</a>
				<nav className={`header__items ${this.state.menuActive === true ? 'header__items--active' : ''}`}>
					<div className="header__itemsWrapper">
						<a href="#beneficios" className="header__item">Benefícios</a>
						<a href="#porque" className="header__item">Porque o Mestre Construtor</a>
						<a href="#videos" className="header__item">Nossos vídeos</a>
						<a href="#torne-se" className="header__item">Torne-se um mestre construtor</a>
					</div>
				</nav>
				<span 
					className="header__toggler"
					onClick={this.toggleActive}
					>
					<FaBars />
				</span>
			</header>
		)
	}
}

export default Header