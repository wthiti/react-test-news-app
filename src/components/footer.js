import React from 'react';
import { Navbar } from 'react-bootstrap';

import Nav from './nav';

export default props => {
  return (
    <Navbar className='footer'>
      <Nav />
      <Navbar.Text pullRight>
        Copy right &copy; News app
      </Navbar.Text>
    </Navbar>
  )
}
