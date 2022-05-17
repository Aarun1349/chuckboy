import React, { useState, useEffect } from 'react'
import axios from 'axios'



const options = {
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
    headers: {
        accept: 'application/json',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'X-RapidAPI-Key': '959192992amsh81f516b9d3636d1p14819djsn074f956629a3'
    }
};




function ChuckSays() {

    const callChuck = () => {
        axios.get(options.url).then((response) => {
            console.log(response.data)
            setChuck(response.data);
        }).catch((error) => {
            console.log(error)
        })

    }
    const [chuck, setChuck] = useState('');
    useEffect(() => {
        callChuck();

    }, [])

    return (
        <div>{chuck}</div>
    )
}

export default ChuckSays