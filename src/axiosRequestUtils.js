const axios = require('axios');

export const getBookDataFromServer = () => {
  return axios.get('http://localhost:8080/books');
}

export const addLikeToDatabase = (id) => {
  return axios.put(`http://localhost:8080/books/like/${id}`)
}

export const addDislikeToDatabase = (id) => {
  return axios.put(`http://localhost:8080/books/dislike/${id}`)
}
