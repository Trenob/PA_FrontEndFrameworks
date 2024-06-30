import React, { useEffect, useReducer, useRef } from "react";
import { useState } from "react";

export default function Message() {
    const [userMsg, setUserMsg] = useState('');
    var [theMessage, setTheMessage] = useState();

    const changeText = (e) => {
            setUserMsg(e.target.value);
    };
    


    function displayMsg (e) {
        if (e.target.type === 'submit'){
            setTheMessage(userMsg);
        } else if (e.target.type === 'reset') {
            setTheMessage('');

            //also clear textarea
            document.querySelector("#root > div > div > div.msgInput > input").value = '';
        }      
    };

    return (
        <div>
            <div className="msgInput">
                <input
                    name="userInput"
                    type="text"
                    onChange={changeText}>
                </input>
            </div>

            <div className="msgButtons">
                <button 
                    type="reset"
                    onClick={displayMsg}>
                        Reset
                </button>
                <button
                    type="submit"
                    onClick={displayMsg}>
                    Display Message
                </button>
            </div>

            <div className="msgToDisplay">
                <h3>Message to Display:</h3>
                <p>{theMessage}</p>
            </div>
        </div>
    );
}