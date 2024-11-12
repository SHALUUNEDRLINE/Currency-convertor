import React, { useState } from 'react'

function BackgroundChanger() {
    const [colour, setColour] = useState('#fff')
    const [CopyClick,setCopyClick] = useState( false)
    function RandomColor() {
        const ChangeBg = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
        let code = "#"
        for (let i = 0; i < 6; i++) {
            code += ChangeBg[Math.floor(Math.random() * ChangeBg.length)]
        }
        setColour(code)
        setCopyClick(false)
    }
    

    function CopyCode(){

        window.navigator.clipboard.writeText(colour)
        setCopyClick(true)
    }

    return (
        <div className={`flex items-center justify-center flex-col h-screen`} style={{ background: colour }}>
            <p className="mb-4 text-lg font-semibold">{<div className='bg-white text-black w-26 hover:bg-pink-300' style={{color :colour}} >{colour}
                <button className='bg-red-400' onClick={CopyCode}>{CopyClick?"copyied" :"copy"}</button>
                </div>} </p>
            <button
                className="bg-pink-800 text-white px-6 py-2 font-bold text-lg rounded-lg shadow-lg border-2 border-transparent 
                           transition-all duration-300 ease-in-out transform hover:bg-pink-700 hover:border-pink-400 
                           hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-300"
                onClick={RandomColor}
            >
                Click to Change Color
            </button>
        </div>
    )
}

export default BackgroundChanger
