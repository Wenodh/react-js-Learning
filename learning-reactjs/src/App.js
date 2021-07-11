//import logo from './logo.svg';
import './App.css';
import Student from './Student';
import User from './User';
import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('wenodh');
    const [data, setData] = useState(null);
    const [print, setPrint] = useState(false);
    const [status, setStatus] = useState(false);
    function getData(val) {
        console.warn(val.target.value);
        setData(val.target.value);
        setPrint(false);
    }
    return (
        <div className="App">
            {status ? <h1>Hi.....!</h1> : null}
            <button onClick={() => setStatus(false)}>hide</button>
            <button onClick={() => setStatus(true)}>show</button>
            <button onClick={() => setStatus(!status)}>toddle</button>
            {print ? <h1>{data}</h1> : null}
            <div>
                <input type="text" onChange={getData} />
                <button onClick={() => setPrint(true)}>print</button>
            </div>
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
