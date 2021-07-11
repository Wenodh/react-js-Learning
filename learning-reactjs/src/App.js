//import logo from './logo.svg';
import './App.css';
import Student from './Student';
import User from './User';
import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('wenodh');
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);
    function getData(val) {
        console.warn(val.target.value);
        setData(val.target.value);
        setPrint(false);
    }
    return (
        <div className="App">
            {print ? <h1>{data}</h1> : null}
            <input type="text" onChange={getData} />
            <button onClick={() => setPrint(true)}>print</button>
            <Student name={name} />
            <button
                onClick={() => {
                    setName('vinod');
                }}
            >
                Update name
            </button>
            <User />
        </div>
    );
}

export default App;
