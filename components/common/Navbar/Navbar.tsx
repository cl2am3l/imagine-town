import React, { ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import s from "./Nav.module.css";
import {
  Container,
  Button,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

interface Props {}

export default function NavBar({}: Props): ReactElement {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">ImagineTown</Navbar.Brand>
            <Nav.Link href="/search">search</Nav.Link>
            <Nav.Link href="/fav">fav</Nav.Link>
            <Nav.Link href="/">cart</Nav.Link>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/men">Man</Nav.Link>
            <Nav.Link href="/women">Women</Nav.Link>
            <Nav.Link href="/kid">Kid</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
