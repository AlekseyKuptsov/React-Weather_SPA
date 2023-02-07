import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const initialState = {
    currentWeatherLoadingStatus: ''
}

export const fetchCurrentWeather = createAsyncThunk(
    'currentWeather/fetchCurrentWeather',
    async ([apiBase, lat, lon, apiKey, elements]) => {
        const request = useHttp();
        return await request(`${apiBase}/${lat},${lon}?${apiKey}&lang=en&unitGroup=base&include=current,hours${elements}`)
    }
)

const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCurrentWeather.pending, state => {
                state.currentWeatherLoadingStatus = 'loading'
            })
            .addCase(fetchCurrentWeather.fulfilled, (state, action) => {
                state.currentWeatherLoadingStatus = 'loaded';
                state.currentConditions = action.payload;
                state.days = action.payload.days;
                state.daily = [action.payload.days[0].hours[7], action.payload.days[0].hours[13], action.payload.days[0].hours[18], action.payload.days[0].hours[23]]
            })
            .addCase(fetchCurrentWeather.rejected, state => {
                state.currentWeatherLoadingStatus = 'error'
            })
            .addDefaultCase(() => {})
    }
})

const {reducer} = currentWeatherSlice;
export default reducer;