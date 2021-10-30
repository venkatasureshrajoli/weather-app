import React, { useEffect } from 'react';
function Weather() {

    useEffect(() => {
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=solapur&units=metric&appid=687dd8f716b13ad1c5c37ff9fd5ccd73`;
        fetch(URL).then((response) => {
            console.log('the response is', response);
            const json = response.json();
            return json;
        }).then((jsonResponse) => {
            console.log('json response is', jsonResponse);
        }).catch((err) => {
            console.log('The error is', err);
        })
    }, [])
    return (
        <h1>Weather</h1>
    )
}

export default Weather;