import React from "react"
const Trollface = require("../Trollface.png")

const Header = () => {

    return (

        <header>
            <img 
                src={Trollface}
                alt="Problem?"
            />
            <p>Meme Generator</p>
        </header>

    )
}

export default Header