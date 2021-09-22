import { Link } from 'react-router-dom';
import AppRouter from '../../config/router';
// import { Home, Expertise, Certification, Testinomial, Hireme } from '../../containers'

import './css/style.css'
function Header() {
    return (
        <div>
            <ul className="navbar">
            <AppRouter>
                <li> <Link to="/">Home</Link></li>
                <li><Link to='/expertise'>Expertise</Link></li>
                <li><Link to='/certification'>Certification</Link></li>
                <li><Link to='/testinomial'>Testimonials</Link></li>
                <li><Link to='/hireme'> Hire Me </Link></li>
            </AppRouter>
            </ul>
        </div>
    )
}

export default Header;