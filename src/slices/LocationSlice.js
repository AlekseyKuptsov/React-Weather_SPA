import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const initialState = {
    locationLoadingStatus: ''
}

export const fetchLocation = createAsyncThunk(
    'location/fetchLocation',
    async () => {
        const request = useHttp();
        return await request(`http://ip-api.com/json`)
    }
)

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.locationLoadingStatus = 'loaded';
            state.city = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLocation.pending, state => {
                state.locationLoadingStatus = 'loading'
            })
            .addCase(fetchLocation.fulfilled, (state, action) => {
                state.locationLoadingStatus = 'loaded';
                state.city = action.payload;
                // window.localStorage.setItem('location', JSON.stringify({
                //     city: action.payload.city,
                //     lat: action.payload.lat,
                //     lon: action.payload.lon
                // }));
            })
            .addCase(fetchLocation.rejected, state => {
                state.locationLoadingStatus = 'error'
            })
            .addDefaultCase(() => {})
    }
})

const {reducer, actions} = locationSlice;
export default reducer;
export const {setLocation} = actions;