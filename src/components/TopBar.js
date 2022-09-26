import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import Logo from './images/Logo.svg'

export default function TopBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home"><img src={Logo} alt="Instacart Logo" /> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"> 
                    </Nav>
                    <Nav style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }} >
                        <Nav.Link style={{color: "#343538"}} href="#LogIn">Log In</Nav.Link>
                        <Button variant="success" style={{fontSize: "18px"}}>Sign Up</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}