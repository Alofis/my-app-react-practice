import React from "react";

const date = Date()

function Footer() {
    return( 
    <footer>
        <p>{"Copyright:" + " " + date}</p>
    </footer>
    )
}

export default Footer;