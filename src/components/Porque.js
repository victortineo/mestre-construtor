import React from 'react'
import './porque.scss'
import ContentText from './ContentText'
import CircleMosaic from './CircleMosaic'

const items = [
	{id: 1,title: 'Entregamos qualidade', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ', 'image': 'https://layerup.com.br/wp-content/uploads/2019/01/Icone-2019.png'},
	{id: 2,title: 'Lorem Ipsum Domet', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ', 'image': 'https://layerup.com.br/wp-content/uploads/2019/01/Icone-2019.png'},
	{id: 3,title: 'Laret Doroes', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ', 'image': 'https://layerup.com.br/wp-content/uploads/2019/01/Icone-2019.png'},
	{id: 4,title: 'Dararem Doremit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ', 'image': 'https://layerup.com.br/wp-content/uploads/2019/01/Icone-2019.png'},
	{id: 5,title: 'Doris Coloris', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ', 'image': 'https://layerup.com.br/wp-content/uploads/2019/01/Icone-2019.png'}
]

const Porque = () => {
	return (
		<div className="porque" id="porque">
			<div className="porque__intro">
				<div className="porque__pendente"></div>
				<ContentText 
					title="porque se tornar um mestre construtor?"
					hasSeparator={true}
					separatorIcon='https://layerup.com.br/wp-content/uploads/2018/05/icone.png'
					text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.`}
				/>
				<a className="porque__intro-link" href="#intro">Quero me tornar um mestre construtor!</a>
			</div>
			<div className="porque__info">
				<CircleMosaic 
					items={items}
				/>
			</div>
		</div>
	)
}

export default Porque