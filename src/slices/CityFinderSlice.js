import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../hooks/http.hook";

const initialState = {
    findLoadingStatus: ''
}

export const fetchFindLocation = createAsyncThunk(
    'findLocation/fetchFindLocation',
    async ([apiBase, city, {method, body, headers}]) => {
        const request = useHttp();
        return await request(`${apiBase}q=${city}&type=CITY`, method, body, headers);
    }
)

const cityFinderSlice = createSlice({
    name: 'findLocation',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFindLocation.pending, state => {
                state.findLoadingStatus = 'loading'
            })
            .addCase(fetchFindLocation.fulfilled, (state, action) => {
                state.findLoadingStatus = 'loaded';
                state.cityList = action.payload;
            })
            .addCase(fetchFindLocation.rejected, state => {
                state.findLoadingStatus = 'error'
            })
            .addDefaultCase(() => {})
    }
})

const {reducer} = cityFinderSlice;
export default reducer;
// export const {setLocation} = actions;