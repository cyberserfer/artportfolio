import React, {Component} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  &:hover {
    box-shadow: 10px 10px 43px -12px #000;
  }
`;

const Container = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row wrap;
`;

class Home extends Component {
//const Home = () => {
state = {
  artItems: [],
  hover: false
}


componentDidMount(){

  // could replace this with async / await 
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
        <Container>
        {this.state.artItems.map( (item, i) =>
          (
            <StyledCard key={i}  style = {{"width": "350px", "margin": "15px"}} >
            <CardMedia
              style={{"height": "40vh"}} 
              image={`http://localhost:1337/${item.picture[0].url}`}
            />
            <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
            {item.title}
          </Typography>
              <Typography component="p">
              Description: {item.description}
              </Typography>
              <Typography component="p">
              Material: {item.material}
              </Typography>
              <Typography component="p">
              Date: {item.date}
              </Typography>
            </CardContent>
            </StyledCard>
          )

        ) }
        </Container>
      </div>
    )
  }
}


export default Home;
