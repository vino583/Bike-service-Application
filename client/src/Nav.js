import { Link } from "react-router-dom";
import "./nav.css";
const Nav =() => (
    <div>
        <div className="na">
            <div className="n2">
            <Link to="/Main" className="home">Home</Link>
            <Link to="/Avaih" className="avai">Available Services</Link>
            <Link to="/Login" className="login">Login</Link> 
            </div>
        </div>
    </div>
)
export default Nav;