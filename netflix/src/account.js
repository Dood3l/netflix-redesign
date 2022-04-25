import React from 'react'
import {Link} from 'react-router-dom';
function Accounts() {
    return (
        <div className="manage-profile">

        <div>
        <Link to="/"><img src="accountimages/Netflix_2015_logo.svg"  alt="logo" className="logo"/></Link>
        </div>

        <div className="accounts">

            <h1>Who's Watching?</h1>

            <div className="profiles">
            <Link to="AccountLoad"><button className="btn"><span>User 1</span></button></Link>
                <button className="btn"><span>User 2</span></button>
                <button className="btn"><span>User 3</span></button>
                <button className="btn"><span>User 4</span></button>
                <button className="btn"></button>
            </div>

            <button className="manage">Manage profiles</button>
            
        </div>

    </div>
    )
}

export default Accounts