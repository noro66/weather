import style  from './SearchBar.module.scss'
import {Button, Form} from "react-bootstrap";
import {Autocomplete, TextField} from "@mui/material";
import {useState} from "react";
import data from "bootstrap/js/src/dom/data";
import {useDispatch, useSelector} from "react-redux";
import {setData} from "../../features/weader/WeatherSlice";

export  const SearchBar = (props) => {
    const dispatch = useDispatch();
    const [unity, setUnity] = useState('metric')


    const Key = '9317d7bb66064a11a877fb466b8f452c';
    const [cities, setCities] = useState([]);
    const  handelAutoChange = (e, value) =>{
        const Api_key = '83807b629be744c024b6c0e393389275'
        const lon = value.lon ?? 0;
        const lat = value.lat ?? 0;
        // const weatherData = useSelector(state => state.weather.data);

        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&unist=${unity}&lon=${lon}&appid=${Api_key}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const {clouds, main, name, sys, timezone, weather, wind} = data;
                dispatch(setData(data))
                })
    }

    const handelInputChange = (e)=>{
       const  value = e.currentTarget.value;
        const apiUrl = `https://api.geoapify.com/v1/geocode/autocomplete?text=${value}&apiKey=${Key}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data && data.features) {
                    const citiesData = data.features.map(metadata => {
                        const { city, country, lat, lon, formatted } = metadata.properties;
                        return { city, country, lat, lon, formatted };
                    });
                    setCities(citiesData);
                }
            })
            .catch(error => console.error('Error:', error));
    }
    return (
        <>
            {/*getOptionLabel={(option) => option.formatted}*/}
            <Form >
                <Form.Group className={`d-flex justify-content-center mt-5 gap-4` }>
                    <Form.Label>
                    <Autocomplete onChange={handelAutoChange} getOptionLabel={(option) => option.formatted} clearOnBlur={false} className={style.searchInput} size={'lg'} renderInput={(params) =>  <TextField {...params} label={'Enter Your City '} onChange={handelInputChange}  /> } options={cities}/>
                    </Form.Label>
                    <Form.Label>
                    <Button size={'lg'}  variant={'primary'}>Search</Button>
                    </Form.Label>
                </Form.Group>
            </Form>
        </>
    );
};
