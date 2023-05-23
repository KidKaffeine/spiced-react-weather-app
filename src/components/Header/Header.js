import "./Header.css"

export default function Header ( data ) {

    const isGoodWeather =  data.weatherData.isGoodWeather
    const condition =  data.weatherData.condition
    const temperature =  data.weatherData.temperature

    return  (
        <h1 className="header"> It's {temperature}°C. {""} <span className="condition__span"> {condition}</span> <span className="header__span">{isGoodWeather ? "Go crazy and go outside!" : "Just stay home."} </span> </h1>

    )}