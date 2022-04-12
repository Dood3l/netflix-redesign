import React from 'react'
import {Link} from 'react-router-dom';

function AccountLoad() {
    
    // let tID = setTimeout(function () {
    //     window.location.href = "/movies";
    //     window.clearTimeout(tID);
    // }, 5000);
    //code above redirects to new page after 5 second delay

    return (
        <div className="manage-profile">

        <div>
        <Link to="/"><img src="accountimages/Netflix_2015_logo.svg"  alt="user" className="logo"/></Link>
        </div>

        <div className="accounts">

            <h1>Welcome back User 1!</h1>
            <br />
            <h2>What're you feeling today?</h2>

            {/* <div className="loading">
            <img src="accountimages/Spinner.gif" />
            </div> */}

            <div className="profiles">
            <Link to="/movies"><button className="btn"><span>Movies</span></button></Link>
                <Link to="/shows"><button className="btn"><span>TV Shows</span></button></Link>
            </div>
            <Link to="/" className='loadingTopSpace'><button className="goBack">Go Back</button></Link>
        </div>

    </div>
    )
}

export default AccountLoad