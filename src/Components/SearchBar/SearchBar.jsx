import style  from './SearchBar.module.scss'
import {Button, Form} from "react-bootstrap";
import {Autocomplete, TextField} from "@mui/material";
import {useState} from "react";
export  const SearchBar = (props) => {
    const ipAddress = '0';
    const Key = process.env.WEATHER_API_KEY;
    const [cities, setCities] = useState([]);

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
                    <Autocomplete getOptionLabel={(option) => option.formatted}  clearOnBlur={false} onInputChange={handelInputChange} className={style.searchInput} size={'lg'} renderInput={(params) =>  <TextField {...params} label={'Enter Your City '} /> }  options={cities}/>
                    </Form.Label>
                    <Form.Label>
                    <Button size={'lg'}  variant={'primary'}>Search</Button>
                    </Form.Label>
                </Form.Group>
            </Form>
        </>
    );
};
