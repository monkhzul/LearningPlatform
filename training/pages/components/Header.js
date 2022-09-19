import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import user from '../../images/svg/user.svg'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

export default function Header() {
  return (
    <header>
                <div className='border flex justify-between flex-col-reverse sm:flex-row'>
                    <Form className="d-flex my-2 mx-5">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="" className='mx-5'>
                            UserName
                        </Dropdown.Toggle>

                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="/">Sign Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>


                <div className='user w-full'>
                    <Navbar bg="light" expand="md">
                        <Container fluid>
                            <Navbar.Brand href="/components/Home" className='mx-5 font-semibold'>М-Си-Эс Академи</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0 w-full flex justify-center text-lg flex-wrap navMenu"
                                    navbarScroll
                                >
                                    <NavDropdown title="Бидний тухай" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Сургалтын мэдээлэл" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="/components/Courses/Courses">Сургалтууд</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Сургалтын хуваарь
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Эх сурвалжууд
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#action1">Хөтөлбөрүүд</Nav.Link>
                                    <NavDropdown title="Миний сургалтууд" id="navbarScrollingDropdown">
                                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action4">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action5">
                                            Something else here
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#">
                                        Багш нар
                                    </Nav.Link>
                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </header>
  )
}
