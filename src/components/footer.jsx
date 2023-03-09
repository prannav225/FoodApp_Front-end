import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer mt-5 border text-secondary lg-sm-w-100">
            <div className="logo text-center">
              <Link to="/home">
              <img src="/images/Babai Hotel LOGO.png" alt="" width="100px" className="logoimg mt-2" />
              </Link>  
            </div>
            <div className="links d-flex justify-content-center mt-2 p-3 fs-5" >
                <Nav.Link href="/home" className='px-3 links'>Home</Nav.Link>
                <Nav.Link href="/home/about" className='px-3 links'>About</Nav.Link>
                <Nav.Link href="/home/addposts" className='px-3 links'>Add Posts</Nav.Link>
                <Nav.Link href="/home/food" className='px-3 links'>Food</Nav.Link>
                <Nav.Link href="/" className='px-3 links'>Logout</Nav.Link>
            </div>
            <div className='d-flex justify-content-center text-center p-3 '>
                    <p className='px-4 mb-0 lg-sm-w-50 '>Copyright © 1960 Babai Hotel. All Rights Reserved. The content, design, and graphics on this website are protected under applicable copyright laws. Unauthorized use of any materials on this website is prohibited. Babai Hotel is a registered trademark of Mr.Babai.</p>
                </div>
        </div>
    );
}

export default Footer;