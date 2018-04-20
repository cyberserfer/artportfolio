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
    justify-content: space-around;
    align-items: center;
    a {
        flex: 1;
        text-align: center;
        ${'' /* border: 2px solid red; */}
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
                <div>
                    <NavLink to='/'>Home</NavLink>
                </div>

                <Popover minimal
                    interactionKind={PopoverInteractionKind.HOVER}
                    position={Position.TOP}
                    content={
                        <MaterialsDropDown>
                            <Link to='/materials/wood'>Wood</Link>
                            <Link to='/materials/metal'>Metal</Link>
                            <Link to='/materials/glass'>Glass</Link>
                            <Link to='/materials/paper'>Paper</Link>
                            <Link to='/materials/leather'>Leather</Link>
                        </MaterialsDropDown>
                    }
                    target={<NavLink to='/materials'>Materials</NavLink>} />

                <Popover minimal
                    interactionKind={PopoverInteractionKind.HOVER}
                    position={Position.TOP}
                    content={
                        <MaterialsDropDown>
                            <Link to='/style/painting'>Painting</Link>
                            <Link to='/style/blacksmithing'>Blacksmithing</Link>
                            <Link to='/style/lampwork'>Lampwork</Link>
                            <Link to='/style/propmaking'>Prop Making</Link>
                            <Link to='/style/photography'>Photography</Link>
                            <Link to='/style/woodworking'>Woodworking</Link>
                            <Link to='/style/leatherworking'>Leatherworking</Link>
                        </MaterialsDropDown>
                    }
                    target={<NavLink to='/style'>Style</NavLink>} />

                <Popover minimal
                    interactionKind={PopoverInteractionKind.HOVER}
                    position={Position.TOP}
                    content={
                        <MaterialsDropDown>
                            <Link to='/genre/steampunk'>Steampunk</Link>
                            <Link to='/genre/fallout'>Fallout</Link>
                        </MaterialsDropDown>
                    }
                    target={<NavLink to='/genre'>Genre</NavLink>} />

                <Popover minimal
                    interactionKind={PopoverInteractionKind.HOVER}
                    position={Position.TOP}
                    content={
                        <MaterialsDropDown>
                            <Link to='/year/1990_1999'>1990 - 1999</Link>
                            <Link to='/year/2000_2009'>2000 - 2009</Link>
                            <Link to='/year/2010_2014'>2010 - 2014</Link>
                            <Link to='/year/2015_present'>2015 - present</Link>
                        </MaterialsDropDown>
                    }
                    target={<NavLink to='/year'>Year</NavLink>} />

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
