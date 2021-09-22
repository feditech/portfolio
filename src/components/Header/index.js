import { Link } from 'react-router-dom';
import './css/style.css'
function Header() {
    return (
        <div>
            <ul className="navbar">
           
                <li><Link to="/">Home</Link></li>
                <li><Link to='/expertise'>Expertise</Link></li>
                <li><Link to='/certification'>Certification</Link></li>
                <li><Link to='/testinomial'>Testimonials</Link></li>
                <li><Link to='/hireme'> Hire Me </Link></li>
           
            </ul>
        </div>
    )
}
export default Header;