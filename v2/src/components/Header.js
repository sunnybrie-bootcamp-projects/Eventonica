import React, { useEffect, useState, useCallback } from "react";
import Nav from './Nav';

function Header(props) {


    return (
    <>
        <Nav currentUser={props.currentUser}/>
        <h1 class="eventonica">Eventonica</h1>
    </>
    );
}

export default Header;