import style from  './Weather.module.scss'
import {Card} from "react-bootstrap";
import PositionSvg from "../Svgs/PositionSvg";
import DefaultWeatherSvg from "../Svgs/DefaultWeatherSvg";
import ThermometerSvg from "../Svgs/ThermometerSvg";
import TimeSvg from "../Svgs/TimeSvg";
import {useSelector} from "react-redux";
export  const Weather = (props) => {
    const weather = useSelector(state => state.weather);
    console.log(weather);
    return (
        <>
            <Card className={`text-center  ${style.weatherContainer}`}>
                <Card.Body>
                    <Card.Title >
                        {weather.name} {weather.sys.country} <PositionSvg/>
                    </Card.Title>
                    <Card.Text as={'div'} className={style.weatherInfo}>

                        <div>
                            <DefaultWeatherSvg/>
                        </div>
                        <div>{weather.weather[0].description}</div>
                        <div className={style.temperature}>
                            <span>{weather.main.temp} </span>
                            <span><ThermometerSvg/></span>
                        </div>
                        <div>
                            <span> 15H22MIN </span>
                            <span><TimeSvg/></span>
                        </div>
                        <div className={'d-flex justify-content-evenly gap-2'}>
                            <div>
                                <div>SunRise</div>
                                <div>{weather.sys.sunrise}</div>
                            </div>
                            <div>
                                <div>Wind</div>
                                <div>{weather.wind.speed}</div>
                            </div>
                            <div>
                                <div>temperature</div>
                                <div>{weather.main.temp} C</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};
