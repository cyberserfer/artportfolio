import React, {Component} from 'react';
import axios from 'axios';


class Home extends Component {
//const Home = () => {
state = {
  artItems: []
}


componentDidMount(){

  axios.get('http://localhost:1337/art')
    .then((resp) => {
        console.log('get response');
        console.log(resp);
        this.setState({artItems: resp.data})
    })
    .catch(err => {
        console.log('error retrieving data', err);
    });
}


  render() {

    return(
      <div>
        <h2>Home</h2>

        {this.state.artItems.map( item =>
          (
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <img style={{"width": "350px", "height": "auto"}} src={`http://localhost:1337/${item.picture[0].url}`} />
            </div>
          )

        ) }

      </div>
    )
  }
}


export default Home;
