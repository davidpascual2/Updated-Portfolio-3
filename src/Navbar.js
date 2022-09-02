import { Link } from 'react-router-dom'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>David Pascual</h1>
            <div className='links'>
                <a href='#about-me-section'>About Me</a>
                {/* <Link to='/about-me-section'>About Me</Link> */}
                <a href='#my-work'>My Work</a>
                {/* <Link to='/my-work'>My Work</Link> */}
                <a href='#contact-me-section'>Contact Me</a>
                {/* <Link href='/contact-me-section'>Contact Me</Link> */}
            </div>
        </nav>
     );
}
 
export default Navbar;