import React, {Component} from 'react';
import {getArtPortfolio} from './helper';

class Home extends Component {
//const Home = () => {

  render() {

    return(
      <div>
        <h2>Home</h2>

        {getArtPortfolio}

      </div>
    )
  }
}


export default Home;
