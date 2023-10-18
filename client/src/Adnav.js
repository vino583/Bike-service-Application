import { Link } from "react-router-dom"; 
import Home from "./Home";
import './nav.css';
const Adnav=() =>(
    <div>
        <div className="naaa">
            <div className="n4">
            {/* This code will provide navigation bar for admin page  */}
            <Link to="/Main" className="home1">Home</Link>
            <Link to="/Add" className="avai1">Add Services</Link>
            <Link to="/Upd" className="avai1">Update Status</Link>
            <Link to="/Avaiadd" className="avai1">Delete Service</Link>
            <Link to="/View" className="view">Booking History</Link>
            <Link to="/Main" className="login1">Logout</Link>
            </div> 
        </div>
        
    </div>

)
export default Adnav;