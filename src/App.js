import React, { Component } from 'react';
import styled from 'styled-components';
import { Navbar, NavbarGroup, Popover, PopoverInteractionKind, Position } from "@blueprintjs/core";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';
import Materials from './components/Materials';
import Style from './components/Style';
import Genre from './components/Genre';
import Year from './components/Year';
import Home from './components/Home';


const Header = styled.div`
    width: 100%;
    padding: 10px 20px;
    background-color: #666;
    h1 {
        color: #fff;
    }
`;

const StyledNavbarGroup = styled(NavbarGroup)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        flex: 1;
        text-align: center;
    }
`;

const MaterialsDropDown = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 200px;
    height: 250px;
    a {
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex: 1;
        &:hover {
            background: #ccc;
        }
    }
`;

class App extends Component {
    render() {
      return (
      <Router>
          <div>
          <Header>
            <h1>Paul Buss - Art Portfolio</h1>
        </Header>
        <Navbar>
            <StyledNavbarGroup>
                <NavLink to='/'>Home</NavLink>
                <Popover minimal interactionKind={PopoverInteractionKind.HOVER} position={Position.DOWN} content={
                    <MaterialsDropDown>
                        <Link to='/materials/wood'>Wood</Link>
                        <Link to='/materials/metal'>Metal</Link>
                        <Link to='/materials/glass'>Glass</Link>
                        <Link to='/materials/paper'>Paper</Link>
                    </MaterialsDropDown>
                    } target={<NavLink to='/materials'>Materials</NavLink>} />
                <NavLink to='/style'>Style</NavLink>
                <NavLink to='/genre'>Genre</NavLink>
                <NavLink to='/year'>Year</NavLink>
            </StyledNavbarGroup>
        </Navbar>
        <Switch>
          <Route path="/materials" component={Materials} />
          <Route path="/style" component={Style} />
          <Route path="/genre" component={Genre} />
          <Route path="/year" component={Year} />
          <Route path="/" component={Home} />
          <Redirect from='*' to='/' />
        </Switch>
    </div>
    </Router>
    );
  }
}

export default App;
