import React, { Component } from 'react';
import { Navbar, Image } from 'react-bootstrap';
import sizeMe from 'react-sizeme';

import SearchBar from './search_bar';
import Nav from '../components/nav';

class Header extends Component {
  render() {
    const { width } = this.props.size;

    if(width <= 768)
      return (
        <div>
          <Navbar className='header' >
            <Navbar.Brand>
              <Image src='http://via.placeholder.com/120x120' circle />
            </Navbar.Brand>
            <Navbar.Collapse>
              <Nav />
            </Navbar.Collapse>
            <Navbar.Header>
              <Navbar.Toggle />
            </Navbar.Header>
          </Navbar>
          <Navbar>
            <Navbar.Form>
              <SearchBar />
            </Navbar.Form>
          </Navbar>
        </div>
      );
    else
      return (
        <Navbar>
          <Navbar.Brand>
            <Image src='http://via.placeholder.com/120x120' circle />
          </Navbar.Brand>
          <Navbar.Collapse>
            <Nav />
            <Navbar.Form pullRight>
              <SearchBar />
            </Navbar.Form>
          </Navbar.Collapse>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
      );
  }
}

const config = {};
const sizeMeConnect = sizeMe(config);

export default sizeMeConnect(Header);
