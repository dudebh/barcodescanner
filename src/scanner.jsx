import React, { useEffect, useState } from 'react'
import Quagga from "quagga";
import config from "./scannerConfig.json";

function Scanner(props) {
    const [camera, setCamera] = useState(false);
    const [isDetected, setIsDetected] = useState(false)
    const [result, setResult] = useState(null);
    const onDetected = result => {
        setResult(result);
    };
  
    useEffect(() => {
        setIsDetected(false)
        Quagga.init(config, err => {
            if (err) {
                console.log(err, "error msg");
            }
            Quagga.start();
            return () => {
                Quagga.stop()
            }
        });

        //detecting boxes on stream
        Quagga.onProcessed(result => {
            var drawingCtx = Quagga.canvas.ctx.overlay,
            drawingCanvas = Quagga.canvas.dom.overlay;

            if (result) {
                if (result.boxes) {
                    drawingCtx.clearRect(
                        0,
                        0,
                        Number(drawingCanvas.getAttribute("width")),
                        Number(drawingCanvas.getAttribute("height"))
                    );
                    result.boxes
                        .filter(function(box) {
                        return box !== result.box;
                        })
                        .forEach(function(box) {
                        Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
                            color: "green",
                            lineWidth: 2
                        });
                    });
                }

                if (result.box) {
                    Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
                        color: "#00F",
                        lineWidth: 2
                    });
                }

                if (result.codeResult && result.codeResult.code) {
                    Quagga.ImageDebug.drawPath(
                        result.line,
                        { x: "x", y: "y" },
                        drawingCtx,
                        { color: "red", lineWidth: 3 }
                    );
                }
            }
        });

        Quagga.onDetected(detected);
    }, [props.isReload]);

    const detected = result => {
        if(!isDetected){
            console.log(result.codeResult.code)
            props.setBarcodeNumber(result.codeResult.code)
        }
        setIsDetected(true)
        const cameraFeed = document.getElementById("interactive")
        cameraFeed.getElementsByTagName("video")[0].pause();
        Quagga.stop()
        onDetected(result.codeResult.code);
    };

    return (
        <div className="camera-container">
            <div id="interactive" className="viewport" />
        </div>
    );
}

export default Scanner;
