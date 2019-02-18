import React, { Component } from 'react';
import './CardGrid.component.css';
import axios from 'axios';
import Card from '../Card/Card.component';

class CardGridComponent extends Component {

  state = {
    booksData: {},
  }

  componentDidMount() {
    axios.get('http://localhost:8080/books').then((booksDataFromAPI) => {
      this.setState({ booksData: booksDataFromAPI.data });
      console.log(this.state.booksData);
    });
  }

  render() {
    return (
      <div className='CardGrid'>
        {
          Object.entries(this.state.booksData).map(author => {
            return <div className='CardGridAuthor'>
              <h1><span>{author[0]}</span></h1>
              {
                author[1].map((bookCard, index) => {
                  return <Card
                    title={bookCard.title}
                    name={bookCard.Name}
                    liked={bookCard.liked}
                    rating={bookCard.rating}
                    imageSrc={`./Images/cover_image.jpeg`}
                  ></Card>
                })
              }
            </div>
          })
        }
      </div>

    )
  }
}

export default CardGridComponent;

