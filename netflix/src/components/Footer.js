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
                <a className='company'>About Netflix</a>
            </li>
            <li>
                <a className='company'>Newsroom</a>
            </li>
            <li>
                <a className='company'>Start Watching</a>
            </li>
            <li>
                <a className='company'>Company Assests</a>
            </li>
            </ul>


            <ul className='footer-links'>
            <li>
                <h1 className='company'>Connect</h1>
            </li>
            <li>
            <Link to="Contact"><a className='company'>Contact Us</a></Link>
            </li>
            <li>
                <a className='socials' href='https://twitter.com/netflix'> <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        
                <a className='socials' href='https://www.instagram.com/netflix/'><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
        
                <a className='socials' href='https://www.facebook.com/netflix'><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
            </li>
            </ul>


            <ul className='footer-links'>
            <li>
                <h1 className='company'>Legal</h1>
            </li>
            <li>
                <a className='company'>Terms and Conditions</a>
            </li>
            <li>
                <a className='company'>Privacy</a>
            </li>
            <li>
                <a className='company'>Cookie Prefrences</a>
            </li>
            </ul>
        </footer>
        </>
    )
}

export default Footer;