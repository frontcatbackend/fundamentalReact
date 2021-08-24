import { useState } from "react";
import React from 'react';

const Input = () => {
    let [text, setText] = useState("Text")
    return (
        <div>
        <h1>{text}</h1>
            <input
                type="text"
                value={text}
                onChange={event => setText(event.target.text)}
            />
        </div>
    );
};

export default Input;