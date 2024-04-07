import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    clouds : undefined,
    main : {
        temp : undefined
    },
    name : undefined,
    sys : undefined,
    timezone : undefined,
    weather : undefined,
    wind : undefined
}
 const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers : {
        setData: (state, action) => {
           const {clouds, main, name, sys, timezone, weather, wind } = action.payload;
            state.clouds = clouds;
            state.sys = sys;
            state.timezone = timezone;
            state.wind = wind;
            state.weather = weather;
            state.name = name;
            state.main = main;
        }
    }
});

export const  {setData} = WeatherSlice.actions;
export default WeatherSlice.reducer;