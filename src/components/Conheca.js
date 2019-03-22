import React from 'react'
import './conheca.scss'
import ContentText from './ContentText'
import ConhecaItem from './ConhecaItem'

const items = [
	{id: 1,title: 'Entregamos qualidade', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis', 'image': 'https://layerup.com.br/wp-content/uploads/2019/01/Icone-2019.png'},
	{id: 2,title: 'Entregamos qualidade', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis', 'image': 'https://layerup.com.br/wp-content/uploads/2019/01/Icone-2019.png'},
	{id: 3,title: 'Entregamos qualidade', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis', 'image': 'https://layerup.com.br/wp-content/uploads/2019/01/Icone-2019.png'},
	{id: 4,title: 'Entregamos qualidade', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis', 'image': 'https://layerup.com.br/wp-content/uploads/2019/01/Icone-2019.png'}
]

const Conheca = () => {
	return (
		<div className="conheca" id="beneficios">
			<div className="conheca__info">
				<ContentText 
					title='Conheça o programa'
					text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
				/>
			</div>
			<div className="conheca__compose">
				{items.map(i => (
					<React.Fragment>
					<ConhecaItem 
						text={i.text}
						title={i.title}
						id={i.id}
						image={i.image}
					/>
					</React.Fragment>
				))}
			</div>
		</div>
	)
}

export default Conheca