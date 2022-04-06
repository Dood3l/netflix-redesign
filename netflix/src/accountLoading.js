import React from 'react'
import {Link} from 'react-router-dom';

function AccountLoad() {
    
    let tID = setTimeout(function () {
        window.location.href = "/movies";
        window.clearTimeout(tID);
    }, 5000);
    //code above redirects to new page after 5 second delay

    return (
        <div class="manage-profile">

        <div>
        <Link to="/"><img src="accountimages/Netflix_2015_logo.svg"  alt="logo" class="logo"/></Link>
        </div>

        <div class="accounts">

            <h1>Welcome back User 1!</h1>
            <div class="loading">
            <img src="accountimages/Spinner.gif" />
            </div>
            <Link to="/" className='loadingTopSpace'><button class="goBack">Go Back</button></Link>
        </div>

    </div>
    )
}

export default AccountLoad