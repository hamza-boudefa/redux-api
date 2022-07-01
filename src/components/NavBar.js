import React from 'react'
import { Navbar,Nav,Container} from 'react-bootstrap'
import {Link } from 'react-router-dom'
import AddCard from './AddCard'
const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand to ="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to ="/">Home</Nav.Link>
      <Nav.Link as={Link} to ="/UsersList">Users List</Nav.Link>
      <AddCard/>

    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default NavBar
