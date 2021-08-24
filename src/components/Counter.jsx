import React, { useState } from 'react';

const Counter = () => {
    let [count, setCount] = useState(0)
    function incr () {
        setCount(count += 5)
        
    }
    function discr () {
        setCount(count -= 1)
    }
    return (
        <div>
        <h1>Count:</h1>
            <h1>{count}</h1>
            <button onClick={incr}>+</button>
            <button onClick={discr}>-</button>
        </div>
    );
};

export default Counter;