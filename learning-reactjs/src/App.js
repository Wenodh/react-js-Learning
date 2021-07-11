//import logo from './logo.svg';
import './App.css';
import Student from './Student';
import User from './User';
import React, { useState } from 'react';

function App() {
    const [name, setName] = useState('wenodh');
    return (
        <div className="App">
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
