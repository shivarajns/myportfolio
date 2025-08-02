import { Link } from 'react-scroll';

function Navbar() {


    return(
        <>
            <nav>
                <ul>
                    <li><Link to='Home' smooth={true} duration={500} spy={true} activeClass='active'>Home</Link></li>
                    <li><Link to='Skills' smooth={true} duration={500} spy={true} activeClass='active'>Skills</Link></li>
                    <li><Link to='Projects' smooth={true} duration={500} spy={true} activeClass='active'>Projects</Link></li>
                    <li><Link to='Contact' smooth={true} duration={500} spy={true} activeClass='active'>Contact</Link></li>
                    
                </ul>
            </nav>
        
        </>
    )
}

export default Navbar