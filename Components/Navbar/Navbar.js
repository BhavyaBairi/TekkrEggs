import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import styles from "./Navbar.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from '../../Assets/logo.png';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div className={styles.navmaindiv}>
        <Navbar expand="md">
          <NavbarBrand href="/">
            <img src = {logo} className={styles.img}/>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  exact
                  tag={Link}
                  activeClassName={styles.active}
                  to="/"
                  className={styles.navlink}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"/#eggsss"} className={styles.navlink}>
                  Our Products
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"/#contactus"} className={styles.navlink}>
                  Contact us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"/privacy"} className={styles.navlink}>
                  Privacy Policy
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"/terms"} className={styles.navlink}>
                  Terms and conditions
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
