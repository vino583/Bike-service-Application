import { Link } from "react-router-dom"; 
import "./nav.css";
const Nav1 =() => (
     //The div will used to navigate multiple page
    <div>
        <div className="na">
            <div className="n3">
            <Link to="/Home1" className="home1">Home</Link>
            <Link to="/Avai" className="avai1">Available Services</Link>
            <Link to="/Book" className="view"> Book service</Link>
            <Link to="/View" className="view"> History</Link>
            <Link to="/Main" className="login1">Logout</Link>
            </div> 
        </div>
    </div>
)
export default Nav1;