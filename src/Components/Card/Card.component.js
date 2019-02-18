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

      <div className="cardContainer" style={{backgroundColor : this.props.backgroundColor, color: this.props.textColor}}>
        <section className="book-image">
          <img src={this.props.imageSrc} alt="art" />
        </section>
        
        <section>
          <p className="book-heading">{this.props.title}</p>
          <p className="book-story">{this.props.name}</p>
        </section>
        <section className="book-reaction">
          
          <div className="rating-like">
            <div className="rating">
              <span>{this.props.rating}</span>
            </div>
            <div className="likes">
              <img alt="" className="heart" src={this.getImageName()} onClick={this.toggleImage}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


export default Card;
