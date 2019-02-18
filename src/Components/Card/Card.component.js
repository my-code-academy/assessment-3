import React, { Component } from 'react';
import './Card.component.css';
import BlackHeartImage from '../../Icons/heart-black.svg'
import RedHeartImage from '../../Icons/heart-red.svg';


class Card extends Component {
    state = {
        open: this.props.liked,
    }

    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
    }
    
    getImageName = () => this.state.open ? BlackHeartImage : RedHeartImage;

    render() {
        return (
            <div class="card">
                <img src={this.props.imageSrc} alt="abstract" className='image' />
                <div className="container">
                    <p className='title'>{this.props.title}</p>
                    <p className='abstract'>{this.props.name}</p>
                    <div className="responses">
                        <span>{this.props.rating}</span>
                        <img alt="" className="heart" src={this.getImageName()} onClick={this.toggleImage}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
