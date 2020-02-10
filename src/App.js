import React from 'react';
import './App.css';
import './Contact'
import Contact from './Contact';

function App() {

    return (
        <div className="Contact">
        <Contact nom={nom} url={url} online={online}></Contact>
        </div>
    );
}


const nom="toto"
const url="https://placekitten.com/g/64/64"
const online="true"

export default App;
