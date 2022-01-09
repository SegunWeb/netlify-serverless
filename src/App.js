import './style.css'
import React from "react";
import Base from "./components/Base";
import Weather from "./components/Weather";
import border from "./border.svg";



function App() {

    return (
        <div>
            <header >
                <Base/>
            </header>
            <div className='main'>
                <Weather/>
            </div>
            <footer>
                <img className="base_border_up" src={border} alt="border"/>
            </footer>
        </div>
    );
}

export default App;
