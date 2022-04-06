import './App.css';
import './contact.css'




const Contact = () =>{

    return(
        <>
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