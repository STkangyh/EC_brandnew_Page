import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const navigationLinks: {
  label: string,
  link: string,
}[] = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/Aboutus" },
    { label: "Members", link: "/Members" },
    { label: "Recruit", link: "/Recruit" }
  ];

export default function Header() {
  return (
    <Navbar
      sticky="top"
      bg="dark"
      data-bs-theme="light"
      className="bg-body-tertiary"
      collapseOnSelect expand="sm"
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            src="./ECmark.png"
            alt="EC mark"
            className="EC-mark"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          {navigationLinks.map(({ label, link }) => (
            <Nav>
              <Nav.Link href={link} className="p-3" key={label}>
                <h4>
                  {label}
                </h4>
              </Nav.Link>
            </Nav>
          ))}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}