import React, { useState, useEffect } from 'react'

function HookMouse() {
    const[x, setX] = useState(0);
    const[y, setY] = useState(0);

    // To bind event once only... by passing empty array
    useEffect(() => {
        // Effect code
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);
        // Cleaner
        return () => {
            console.log("Component unmounting code");
            window.removeEventListener('mousemove', logMousePosition);
        };
    }, []);  // [] props to be watched if [] just once


    const logMousePosition = (e) => {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY); 
    };

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default HookMouse
