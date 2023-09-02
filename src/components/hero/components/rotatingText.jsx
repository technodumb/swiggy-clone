import React from 'react'
import { useState, useEffect } from 'react';

const RotatingText = () => {
    const words = ['Unexpected guests?', 'Cooking gone wrong?', 'Movie marathon?', 'Game night?', 'Late night at office?', 'Hungry?'];
    let [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(index => (index + 1)%words.length);
        }, 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    console.log(index);

    return (
        <div className="heroTitle">
            <h1>
                {words[index]}
            </h1>
            <p>
                Order food from favourite restaurants near you.
            </p>
        </div>
    )
}

export default RotatingText