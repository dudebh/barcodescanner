import React, { useState, useEffect } from 'react'
import Scanner from './scanner';
import './App.css'

function App() {
    const [isReload, setIsReload] = useState(false)
    const [barcodeNumber, setBarcodeNumber] = useState("Barcode Number")
    useEffect(() => {
        setBarcodeNumber("Barcode Number")
    },[isReload])

    const handleUndo = () => {
        inputReset()
    }

    const inputReset = () => {
        setBarcodeNumber("")
    }

    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <Scanner setBarcodeNumber={setBarcodeNumber} isReload={isReload}/>
            <div className="flex mt-2 justify-center border-black border-b-2 gap-2 text-gray-600" onClick={() => {handleUndo()}} style={{cursor: 'pointer'}}>
                <p>{barcodeNumber}</p>
            </div>
            <div className="flex justify-center">
                <a href="/" onClick={(e) => {
                    e.preventDefault()
                }} className="text-xs underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Input barcode number manually</a>
            </div>
            <button onClick={() => {
                inputReset()
                setIsReload(!isReload)
                }} className="py-4 px-1 mt-4 rounded-xl btn-success">Scan Another Barcode
            </button>
        </div>
    )
}

export default App;
