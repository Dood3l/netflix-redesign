import './App.css';
import {React, useState,} from 'react';
import './contact.css'
import {Link} from 'react-router-dom';
import axios from 'axios'




 const Contact = () => {
            const [name, setName] = useState("");
            const [last_name, setLast_Name] = useState("");
            const [email, setEmail] = useState("");
            const [phone, setPhone] = useState([]);

            
        const submit = () => { axios.post('/api/contact', {
            name: name,
            last_name: last_name,
            email:email,
            phone: phone,
        }).then((data)=>{
        console.log(data)
        })}
       
    return(
        
        <>
        
        <div>
        <Link to="/"><img src="accountimages/Netflix_2015_logo.svg"  alt="logo" class="logo"/></Link>
        </div>
        <div className='contact-container'>
        <header className='head'>
            <div className='head-contact'>
                <h1 className='css-contact-us'>Contact Us</h1>
            </div>
        </header>

        <form  method = 'POST' className = 'form-body' action="/contact" >
            <fieldset className='input-container'>
            <div className = 'form-input-container'>
        <input name="first name" placeholder = ' First Name' onChange= {(e) => {
            setName(e.target.value)
        }} required/>
        <input  name="last name" placeholder = 'Last Name' onChange= {(e) => {
            setLast_Name(e.target.value)
        }} required/>
      
        </div>
        <div className = 'form-input-container'>
        <input type = 'text' name="email" placeholder='Email' onChange= {(e) => {
            setEmail(e.target.value)
        }} required/>
        <input type = '' name="phone" placeholder = 'Phone'  onChange= {(e) => {
            setPhone(e.target.value)
        }} required/> 
       
       

          
        </div>
        </fieldset>
        <button onClick={submit} type= 'submit' className='default button'><span className='send'>Send</span></button>
        </form>
        </div>
        
        </>
    )

    
}

export default Contact;