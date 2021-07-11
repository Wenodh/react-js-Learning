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
    const [input, setInput] = useState(null);
    const [tnc, setTnc] = useState(false);
    const [interest, setIntesest] = useState('');
    function getData(val) {
        console.warn(val.target.value);
        setData(val.target.value);
        setPrint(false);
    }
    function getFormData(e) {
        console.warn(name, tnc, interest);
        e.preventDefault();
    }
    return (
        <div className="App">
            <h1>Form</h1>
            <form onSubmit={getFormData}>
                <input
                    type="text"
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <br />
                <select
                    onChange={(e) => {
                        setIntesest(e.target.value);
                    }}
                >
                    <option>Select Option</option>
                    <option>marvel</option>
                    <option>Dc</option>
                </select>
                <br />

                <input
                    type="checkbox"
                    onChange={(e) => {
                        setTnc(e.target.checked);
                    }}
                />
                <span>accept terms and conditions</span>
                <br />
                <button type="submit">submit</button>
            </form>

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
