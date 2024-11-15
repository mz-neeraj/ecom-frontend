import { Link } from "react-router-dom";
import './NavBar.css';
const NavBar = ()=>{
    return(
        <div className="NavBar">
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/registration'}>Registration</Link></li>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/admin'}>Admin</Link></li>
                <li><Link to={'/logout'}>Logout</Link></li>
            </ul>
        </div>
    );
}
export default NavBar;