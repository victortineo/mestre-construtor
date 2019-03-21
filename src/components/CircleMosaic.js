import React, { Component } from 'react';
import './circleMosaic.scss'
import ContentText from './ContentText'
import CircularIcon from './CircularIcon'

class CircleMosaic extends Component {
	state = {
		active: 0
	}
	toggleActive = (i) => {
		this.setState({
			active: i
		})
	}
  	render() {
  		const activeItem = this.props.items[this.state.active]
	    return (
	    	<div className="circleMosaic">
	    		<div className="circleMosaic__outter">
    				{this.props.items && this.props.items.map((item, i) => (
    					<span className={`circleMosaic__floatIcon circleMosaic__floatIcon--pos${i} ${i === this.state.active ? 'circleMosaic__floatIcon--active' : ''}`}
    						onClick={() => this.toggleActive(i)}
    						onMouseOver={() => this.toggleActive(i)}
    					>
    						<CircularIcon 
    							image={item.image}
    						/>
	    					<ContentText 
    							text={item.text}
    							title={item.title}
    						/>
    					</span>
    				))}
	    			<div className="circleMosaic__inner">
    					<ContentText 
    						text={activeItem.text}
    						title={activeItem.title}
    					/>
	    			</div>
	    		</div>
	    	</div>
    	)
	}
}

export default CircleMosaic