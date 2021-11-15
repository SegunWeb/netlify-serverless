import logo from './logo.svg'
import './style.css'
import axios from "axios";
import {useState} from "react";


function App() {
    const [result, setResult] = useState(null)
    const fetchData = async () => {
        const results = await axios.get('/.netlify/functions/helloWorld')
        console.log(results)
        setResult(results.data.message)
    }

    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo"/>
                <h1 className='title'>Hi Serverless!!!</h1>
            </header>
            <div className='main'>
                <p className='text-message'><span>message:</span> {result}</p>
                <button className='btn' onClick={fetchData}>Get data</button>
            </div>

        </div>
    );
}

export default App;
