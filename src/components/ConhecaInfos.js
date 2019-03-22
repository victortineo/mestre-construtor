import React from 'react'
import './conhecaInfos.scss'
import CounterSection from './CounterSection'

const items = [
	{id: 1,title: 'Entregamos qualidade', number: 2000, 'image': 'https://layerup.com.br/wp-content/uploads/2019/01/Icone-2019.png'},
	{id: 2,title: 'Entregamos qualidade', number: 2000, 'image': 'https://layerup.com.br/wp-content/uploads/2019/01/Icone-2019.png'},
	{id: 3,title: 'Entregamos qualidade', number: 2000, 'image': 'https://layerup.com.br/wp-content/uploads/2019/01/Icone-2019.png'},
	{id: 4,title: 'Entregamos qualidade', number: 2000, 'image': 'https://layerup.com.br/wp-content/uploads/2019/01/Icone-2019.png'}
]

const ConhecaInfos = () => {
	return (
		<div className="conhecaInfos">
			<div className="conhecaInfos__compose">
				{items.map(i => (
					<CounterSection 
						title={i.title}
						image={i.image}
						id={i.id}
						number={2000}
					/>
				))}
			</div>
		</div>
	)
}

export default ConhecaInfos