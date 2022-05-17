import React, { useState, useEffect } from 'react'
import chuckBoy from './chuck/chuck boy.png'
import './style/style.css'
import axios from 'axios'



function ChuckBar() {

    const [categories, setCategories] = useState([])

    const options = {
        method: 'GET',
        url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories',
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '959192992amsh81f516b9d3636d1p14819djsn074f956629a3'
        }
    };

    const getCategories = async () => {
        await axios.request(options).then(function (response) {
            console.log(response.data);
            setCategories(response.data)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: "#FF4949" }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img src={chuckBoy} style={{ height: "40px" }} alt={chuckBoy}></img> Chuck Boy</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    {
                                        categories.map((cat, id) => {
                                            return (<li><a class="dropdown-item" id={id} href="/">{cat}</a></li>)

                                        }

                                        )
                                    }

                                </ul>
                            </li>

                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search what Chuck has to say" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default ChuckBar