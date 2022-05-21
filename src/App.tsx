import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";

function App() {
    return (
        <div className="App">
            <AppTitle />
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

function AppTitle() {
    return <>this is APP component</>
}

function Rating() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return (
        <div>star</div>
    )
}



export function AccordionTitle() {
    return(
        <div><h3>Меню</h3></div>
    )
}

export function AccordionBody() {
    return(
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
