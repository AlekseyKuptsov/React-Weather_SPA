import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const initialState = {
    locationLoadingStatus: ''
}

export const fetchLocation = createAsyncThunk(
    'location/fetchLocation',
    async () => {
        const request = useHttp();
        return await request(`https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8`, "GET", null, {
            'X-RapidAPI-Key': '5cc34e80eemsh26dfb20985835dep191769jsn1d72fa849e75',
            'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
        })
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