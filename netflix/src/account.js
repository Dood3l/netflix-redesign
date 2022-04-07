import React from 'react'
import {Link} from 'react-router-dom';
function Accounts() {
    return (
        <div class="manage-profile">

        <div>
        <Link to="/"><img src="accountimages/Netflix_2015_logo.svg"  alt="logo" class="logo"/></Link>
        </div>

        <div class="accounts">

            <h1>Who's Watching?</h1>

            <div class="profiles">
            <Link to="AccountLoad"><button class="btn"><span>User 1</span></button></Link>
            <Link to="Accountloads"> <button class="btn"><span>User 2</span></button></Link>
                <button class="btn"><span>User 3</span></button>
                <button class="btn"><span>User 4</span></button>
                <button class="btn"><span>Add Profile</span></button>
            </div>

            <button class="manage">Manage profiles</button>
            
        </div>

    </div>
    )
}

export default Accounts