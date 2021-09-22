import {Home,Expertise,Certification,Testinomial,Hireme} from '../../containers'
import './css/style.css'
function Header(){
    return(
        <div>
            <ul className="navbar">
                <li>Home</li>
                <li>Expertise</li>
                <li>Certification</li>
                <li>Testimonials</li>
                <li>Hire Me</li>
            </ul>
        </div>
    )
}

export default Header;