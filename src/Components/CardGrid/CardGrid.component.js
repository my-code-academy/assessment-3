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
      let booksDataCopy = booksDataFromAPI.data;
      this.setState({ booksData: booksDataCopy });
      console.log(this.state.booksData);
    });
  }

  render() {
    const backgroundColor = ['orange', 'white'];
    const textColor = ['black', 'orange'];
    return (
      <div className='CardGrid'>
        {
          Object.entries(this.state.booksData).map(author => {
            return <fieldset className='CardGridAuthor'>
              <legend>{author[0]}</legend>
              {/* <h1><span>{author[0]}</span></h1> */}
              <div className='CardGridAuthor noBorder'>

              {
                author[1].map((bookCard, index) => {
                  return <Card
                    bookId={bookCard.id}
                    title={bookCard.title}
                    name={bookCard.Name}
                    liked={bookCard.liked}
                    rating={bookCard.rating}
                    imageSrc={`./Images/cover_image.jpeg`}
                    backgroundColor={backgroundColor[index%2]}
                    textColor={textColor[index%2]}
                  ></Card>
                })
              }
              </div>
            </fieldset>
            
          })
        }
      </div>

    )
  }
}

export default CardGridComponent;

