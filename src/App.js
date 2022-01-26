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
        <div className="flex flex-col rounded-2xl bg-gray-100 mt-6 barcode-box">
            <div className="barcode-content">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Scan barcode</h2>
                    <div className="back-button">Back</div>
                </div>
                <div className="grid grid-cols-3 gap-x-2">
                    <div className="flex flex-col gap-2 justify-center items-center bg-gray-300">
                        <div className="camera-box">
                            <Scanner setBarcodeNumber={setBarcodeNumber} isReload={isReload}/>
                        </div>
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
                    <div className="ml-10 col-span-2 bg-green-200">
                            Deails
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
