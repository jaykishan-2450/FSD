import React, { useState } from 'react'
import pic from "../images/Brosen.svg"
import "./ImageApp.css";
import { Link } from 'react-router-dom';

const ImageApp = () => {
    const [height, setHeight] = useState(200);
    const [width, setWidth] = useState(200);
    const [rotation, setRotaion] = useState(0);

    return (

        <div className='disp'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            <div className="img">
                <img
                    src={pic}
                    style={{
                        height: height,
                        width: width,
                        transform: `rotate(${rotation}deg)`
                    }}

                />
            </div>
            <div className="panel">
                <div className="height">
                    <button
                        onClick={() => {
                            setHeight(height + 10);
                        }}
                    >Increase Height</button>
                    <button
                        onClick={() => {
                            setHeight(height - 10);
                        }}
                    >Decrease Height</button>
                </div>


                <div className="width">
                    <button
                        onClick={() => {
                            setWidth(width + 10);
                        }}
                    >Increase Width</button>
                    <button
                        onClick={() => {
                            setWidth(width - 10);
                        }}
                    >Decrease Width</button>
                </div>


                <div className="rotation">
                    <button
                        onClick={() => {
                            setRotaion(rotation + 45);
                        }}
                    >Rotate Clockwise</button>
                    <button
                        onClick={() => {
                            setRotaion(rotation - 45);
                        }}
                    >Rotate Anticlockwise</button>
                </div>
            </div>

        </div>
    )
}

export default ImageApp
