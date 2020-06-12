import React, { useState, useEffect } from "react"

const MemeGenerator = () => {

    const [ text, setText ] = useState({topText: "", bottomText:""})
    const [ randomImg, setRandomImg ] = useState("http://i.imgflip.com/1bij.jpg")
    const [ allMemeImgs, setAllMemeImgs ] = useState([])
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(res => {
            const {memes} = res.data[0].url
            console.log(memes)
            setAllMemeImgs({ allMemeImgs: memes })
        })
        .catch(err => console.log(err))
    }, [])

    function handleChange(event) {
        const { name, value } = event.target
        name === "topText" ? setText({...text, topText: value}) : setText({...text, bottomText: value})
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * allMemeImgs.length)
        console.log("random number: " + randNum)
        // const randMemeImg = allMemeImgs[randNum].url
        // setRandomImg({ randomImg: randMemeImg })
    }
    
    return (
        <div>
            <form className="meme-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={text.topText}
                    onChange={handleChange}
                /> 
                <input 
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={text.bottomText}
                    onChange={handleChange}
                /> 
            
                <button>Gen</button>
            </form>
            <div className="meme">
                <img src={randomImg} alt="" />
                <h2 className="top">{text.topText}</h2>
                <h2 className="bottom">{text.bottomText}</h2>
            </div>
        </div>
    )
}

export default MemeGenerator