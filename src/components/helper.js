import React from 'react';
import axios from 'axios';

const artPortfolioDB = 'http://localhost:1337/art'

export const getArtPortfolio = () => {
    axios.get(artPortfolioDB)
      .then((data) => {
          console.log('get response');
          console.log(data);
      })
      .catch(err => {
          console.log('error retrieving data', err);
      });
}
