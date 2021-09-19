import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

function Header() {
  return (
    <div style={{ backgroundColor: '#e0dcd1' }}>
      <Navbar color="muted" light expand="sm">
        <NavbarBrand href="/" style={{ marginLeft: 15 }}>
          <h4>ДЛ ПДКС</h4>
        </NavbarBrand>
        <Nav className="mr-auto" navbar>
          <NavItem>
            <NavLink href="/">
              <b> Додому</b>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">
              <b>О масонстві</b>{' '}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/info">
              <b>Інформація</b>{' '}
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/form">
              <b>Стати масоном</b>{' '}
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
