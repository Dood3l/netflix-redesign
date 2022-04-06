import './App.css';
import './contact.css'
import {Link} from 'react-router-dom';



const Contact = () =>{

    return(
        <>
        <div>
        <Link to="/"><img src="accountimages/Netflix_2015_logo.svg"  alt="logo" class="logo"/></Link>
        </div>

        <form  className = 'form-body'>
            <fieldset className='input-container'>
            <div className = 'form-input-container'>
        <input type = 'text' placeholder = ' First Name'/>
        <input type = 'text' placeholder = 'Last Name'/> 
        </div>
        <div className = 'form-input-container'>
        <input type = 'text' placeholder = 'Email Address'/>
        <input type = 'text' placeholder = 'Phone'/> 
      
        </div>
        </fieldset>
        <button type= 'submit' className='default button'><span className='send'>Send</span></button>
        </form>
        
        </>
    )

    
}

export default Contact;