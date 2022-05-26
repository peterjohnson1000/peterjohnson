import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { BsFillMoonFill, BsSunFill, BsFillLightningChargeFill } from 'react-icons/bs';
import '../App.css';


const Header = () => {
    return (
        <Navbar className = "navBar">
            <Navbar.Brand>
                <BsFillLightningChargeFill style = {{fontSize:"25px"}} />
            </Navbar.Brand>
            <Nav className="ms-auto navLinks">
                <Nav.Link style = {{color:"black"}}> Writing </Nav.Link>
                <Nav.Link style = {{color:"black"}}> About </Nav.Link>
            </Nav>
            <BsFillMoonFill />
        </Navbar>
    );
}
//style = {{color:"white"}}
export default Header;