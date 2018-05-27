import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';


export default props => {
  return (
    <Nav pullLeft>
      <NavItem>News</NavItem>
      <NavItem>Regions</NavItem>
      <NavItem>Video</NavItem>
      <NavItem>TV</NavItem>
    </Nav>
  )
}
