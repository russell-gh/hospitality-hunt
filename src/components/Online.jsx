import React, { useState, useEffect } from 'react';
import './Online.css';

const Online = () => {
    const [online, setOnline] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => {
            setOnline(true);
        })

        window.addEventListener("offline", () => {
            setOnline(false);
        })
    }, []);


    return !online && <div className="offline">Please check your internet connection!</div>;
}

export default Online;