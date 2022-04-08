import './App.css';
import './contact.css'
import {Link} from 'react-router-dom';
import Nav from './components/Nav'

  

 const Contact = () => {
  
    return(
        
        <>
        
        <Nav />
        <div>
        <Link to="/"><img src="accountimages/Netflix_2015_logo.svg"  alt="logo" class="logo"/></Link>
        </div>
        <div className='contact-container'>
        <header className='head'>
            <div className='head-contact'>
                <h1 className='css-contact-us'>Contact Us</h1>
            </div>
        </header>

        <form  method = 'POST' className = 'form-body' action="/api/contact" >
            <fieldset className='input-container'>
            <div className = 'form-input-container'>
        <input name="first name" placeholder = ' First Name' required/>
        <input  name="last name" placeholder = 'Last Name' required/>
      
        </div>
        <div className = 'form-input-container'>
        <input type = 'text' name="email" placeholder='Email'required/>
        <input type = '' name="phone" placeholder = 'Phone'  required/> 
       
       

          
        </div>
        </fieldset>
        <button type= 'submit' className='default button'><span className='send'>Send</span></button>
        </form>
        </div>
        
        </>
    )

    
}

export default Contact;