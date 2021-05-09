import React, { useState } from 'react';

const Test = props => {
    const testState = useState("");
    // console.log(testState[0]);
    // console.log(testState[1]);
    if (testState[0] === "") {
        //testState[1]("Hello world");
        testState[1]("97");
    }
    return (
        <div>
            <h3>{testState[0]}</h3>
        </div>
    );
}

export default Test;