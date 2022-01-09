const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

exports.handler = async function(event, context) {


    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'
    const CITY_URL = event.body || 'Odesa';
    const API_URL = '214c3edc1b092910bb6c4d6806453665'
    const URL = `${BASE_URL}?q=${CITY_URL}&units=metric&appid=${API_URL}`

    console.log(CITY_URL)

    try {
        console.log(event.body)

        const response = await fetch(URL);
        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (err) {
        console.log(URL)

        return {
            statusCode: 500,
            body: err.toString()
        };
    }
}