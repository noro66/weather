import style from  './Weather.module.scss'
import {Card} from "react-bootstrap";
import PositionSvg from "../Svgs/PositionSvg";
import DefaultWeatherSvg from "../Svgs/DefaultWeatherSvg";
import ThermometerSvg from "../Svgs/ThermometerSvg";
import TimeSvg from "../Svgs/TimeSvg";
export  const Weather = (props) => {
    return (
        <>
            <Card className={`text-center  ${style.weatherContainer}`}>
                <Card.Body>
                    <Card.Title >
                        Casablanca MA <PositionSvg/>
                    </Card.Title>
                    <Card.Text as={'div'}  className={`${style.weatherInfo}`}>
                        <div>
                           <DefaultWeatherSvg/>
                        </div>
                        <div className={style.temperature}>
                            <span>35 </span>
                            <span><ThermometerSvg/></span>
                        </div>
                        <div>
                            <span> 15H22MIN </span>
                            <span><TimeSvg/></span>
                        </div>
                        <div className={'d-flex justify-content-evenly gap-2'}>
                            <div>
                                <div>SunRise</div>
                                <div>09:09</div>
                            </div>
                            <div>
                                <div>Wind</div>
                                <div>34km</div>
                            </div>
                            <div>
                                <div>temperature</div>
                                <div>34 C</div>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};
