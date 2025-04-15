import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.scss";

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-white px-4">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="./src/Assets/LandingPage/KtaIcon.png"
            width={"100"}
            alt="KTA"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="navLink" href="#action2">
              ABOUT
            </Nav.Link>

            <NavDropdown
              className="navLink"
              title="PRODUCTS"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="navLink"
              title="DOWNLOADS"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="navLink" href="#action2">
              BLOG
            </Nav.Link>
            <Nav.Link className="navLink" href="#action2">
              CALCULATORS
            </Nav.Link>
            <Nav.Link className="navLink" href="#action2">
              CAREERS
            </Nav.Link>
            <Nav.Link href="#action2" className="contactButton">
              Contact
            </Nav.Link>
          </Nav>

          <div id="demo-2">
            <input type="search" placeholder="Product Search..." />
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
