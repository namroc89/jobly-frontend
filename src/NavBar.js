import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "./auth/UserContext";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  function loggedInNav() {
    return (
      <div>
        <Navbar expand="md" color="light" light>
          <NavLink to="/">Jobly</NavLink>

          <Nav className="ml-auto" navbar>
            <NavItem className="mr-4">
              <NavLink to="/companies/">Companies</NavLink>
            </NavItem>
            <NavItem className="mr-4">
              <NavLink to="/jobs">Jobs</NavLink>
            </NavItem>
            <NavItem className="mr-4">
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
            <NavItem className="mr-4">
              <NavLink to="/" onClick={logout}>
                Log out {currentUser.username}
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
  function loggedOutNav() {
    return (
      <div>
        <Navbar expand="md" color="light" light>
          <NavLink to="/">Jobly</NavLink>

          <Nav className="ml-auto" navbar>
            <NavItem className="mr-4">
              <NavLink to="/login">Login</NavLink>
            </NavItem>
            <NavItem className="mr-4">
              <NavLink to="/signup">Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
  return <>{currentUser ? loggedInNav() : loggedOutNav()}</>;
}

export default NavBar;
