import './style.css'
import axios from "axios";
import React, {useState} from "react";
import Base from "./components/Base";
import Weather from "./components/Weather";
import border from "./border.svg";



function App() {

    // const [value, setValue] = useState('')
    //
    // console.log(value)

    // const fetchData = async () => {
    //     const results = await axios.post('/.netlify/functions/helloName', {data: '1'})
    // }


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
