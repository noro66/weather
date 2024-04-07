import {configureStore} from "@reduxjs/toolkit";
import WeatherSlice from "../../features/weader/WeatherSlice";

export const store = configureStore(
    {
        reducer: {
            weather : WeatherSlice
        }
    }
)