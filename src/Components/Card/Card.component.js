import React, { Component } from 'react';
import './Card.component.css';
import BlackHeartImage from '../../Icons/heart-black.svg'
import RedHeartImage from '../../Icons/heart-red.svg';
import {addLikeToDatabase, addDislikeToDatabase} from '../../axiosRequestUtils';


class Card extends Component {
  state = {
    notLiked: true,
  }

  toggleImage = (id) => {
    this.setState(state => ({ notLiked: !state.notLiked }));
    if(this.state.notLiked) {
      addLikeToDatabase(id).then((response) => {
        console.log(response);
        
      });
    } else {
      addDislikeToDatabase(id).then((response) => {
        console.log(response);
      });
    }
    
  }

  getImageName = () => this.state.notLiked ? BlackHeartImage : RedHeartImage;

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
              <img alt="" className="heart" src={this.getImageName()} onClick={() => this.toggleImage(this.props.bookId)}/>
            </div>
          </div>
        </section>
      </div>
    );
  }
}


export default Card;
