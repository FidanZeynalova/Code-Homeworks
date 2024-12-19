import React, { useState } from 'react'
import axios from "axios"

function Weather() {
    let [data, setData] = useState("")

    function GetDatas() {
        axios.get("https://api.weatherapi.com/v1/current.json?key=7b1eaf6efd804a44b87101529222212&q={seher_adi}&aqi=no")
    }
    return (
        <div>
            <div className="form">
                <form>
                    <input type="text" placeholder='ForeCast...' required />
                    <button>Get ForeCast</button>
                </form>
                <div className="content">
                    <h2>Baki</h2>
                    <img src="https://cdn.weatherapi.com/weather/64x64/night/176.png" alt="" />
                    <span>Condition text:Patchy rain nearby</span>
                    <span>Cloud: 100</span>
                    <span>Localtime:2024-12-19 23:06</span>
                    <span>Country:Azerbaijan</span>

                </div>
            </div>
        </div>
    )
}

export default Weather
