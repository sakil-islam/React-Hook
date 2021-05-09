import React, { useState } from 'react';

const Test = props => {
    const [myName, setMyName] = useState("");
    const [myInfo, setMyInfo] = useState({
        a: "hello",
        b: "world"
    });

    const changeState = () => {
        setMyName("Rahim");
        setMyInfo({
            ...myInfo,
            b: "New world"
        })
    }
    console.log("MyInfo:", myInfo);
    return (
        <div>
            <button onClick={changeState}>Show</button>
        </div>
    );
}

export default Test;