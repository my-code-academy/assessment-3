import React, { Component } from 'react';
import './CardGrid.component.css';
import Axios from 'axios';

class CardGridComponent extends Component {

  componentDidMount() {
    Axios('').then((jsonObj) => {
      console.log(jsonObj.data);
      this.props.addCards(jsonObj.data);
    });
  }

  render() {
    return (
      <div className='CardGrid'>
        <div className='CardGridAuthor'>
          <h1><span>Div title</span></h1>
        </div>
      </div>
      
    )
  }
}

export default CardGridComponent;

