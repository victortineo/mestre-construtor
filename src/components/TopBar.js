import React from 'react'
import './topbar.scss'
import {FaFacebookF, FaYoutube, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {IoIosMailUnread} from 'react-icons/io'

const TopBar = () => {
	return (
		<div className="topBar">
			<div className="topBar--wrapper">
				<div className="topBar__contact">
					<span className="topBar__phone">020 1234 56978</span>
					<a href="mailto:email@mestreconstrutor.com.br" className="topBar__mail">email@mestreconstrutor.com.br</a>
				</div>
				<div className="topBar__socials">
					<a className="topBar__social" href="#redeSocial">Facebook <span className="topBar__social-icon topBar__social-icon--facebook"><FaFacebookF /></span></a>
					<a className="topBar__social" href="#redeSocial">Youtube <span className="topBar__social-icon topBar__social-icon--youtube"><FaYoutube /></span></a>
					<a className="topBar__social" href="#redeSocial">Instagram <span className="topBar__social-icon topBar__social-icon--instagram"><FaInstagram /></span></a>
					<a className="topBar__social" href="#redeSocial">Linkedin <span className="topBar__social-icon topBar__social-icon--linkedin"><FaLinkedin /></span></a>
					<a className="topBar__social" href="#redeSocial">Email <span className="topBar__social-icon topBar__social-icon--email"><IoIosMailUnread /></span></a>			
				</div>
			</div>
		</div>
	)
}

export default TopBar