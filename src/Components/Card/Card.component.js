import React, { Component } from 'react';
import './Card.component.css';
import BlackHeartImage from '../../Icons/heart-black.svg'
import RedHeartImage from '../../Icons/heart-red.svg';
import Axios from 'axios';


class Card extends Component {
  state = {
    liked: this.props.liked,
  }

  toggleImage = (id) => {
    this.setState(state => ({ liked: !state.liked }));
    Axios.get(`http://localhost:8080/books/like/${id}`).then((response) => {
      console.log(response);
    })
  }

  getImageName = () => this.state.liked ? BlackHeartImage : RedHeartImage;

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
