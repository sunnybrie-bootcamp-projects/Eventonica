import React from 'react';



function Nav(){

    return (
        <nav>
            <div id="currentUser"> 
                <p><i>Logged in as...</i></p>
                <img class="loggedInAvatar" src="../graphics/defaultavatar1.png"/>
                
                <h6 class="navUser">Blue</h6>
            </div>
            
        </nav>
    );
}

export default Nav;