import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-router-dom';





const Footer = () =>{

    return(
        <>
        <footer className='footer-container'>
            <ul className='footer-links'>
            <li>
                <h1 className='company'>Company</h1>
            </li>
            <li>
                <span className='company'>About Netflix</span>
            </li>
            <li>
                <span className='company'>Newsroom</span>
            </li>
            <li>
                <span className='company'>Start Watching</span>
            </li>
            <li>
                <span className='company'>Company Assests</span>
            </li>
            </ul>


            <ul className='footer-links'>
            <li>
                <h1 className='company'>Connect</h1>
            </li>
            <li>
            <Link to="Contact"><span className='company'>Contact Us</span></Link>
            </li>
            <li>
                <span className='socials' href='https://twitter.com/netflix'> <FontAwesomeIcon icon={faTwitter} size="2x" /></span>
        
                <span className='socials' href='https://www.instagram.com/netflix/'><FontAwesomeIcon icon={faInstagram} size="2x" /></span>
        
                <span className='socials' href='https://www.facebook.com/netflix'><FontAwesomeIcon icon={faFacebook} size="2x" /></span>
            </li>
            </ul>


            <ul className='footer-links'>
            <li>
                <h1 className='company'>Legal</h1>
            </li>
            <li>
                <span className='company'>Terms and Conditions</span>
            </li>
            <li>
                <span className='company'>Privacy</span>
            </li>
            <li>
                <span className='company'>Cookie Prefrences</span>
            </li>
            </ul>
        </footer>
        </>
    )
}

export default Footer;