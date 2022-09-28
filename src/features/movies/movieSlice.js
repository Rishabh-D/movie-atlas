import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/MovieApiKey"
import { useDispatch } from 'react-redux';

// create the thunk after importing createAsyncThunk 
// and call it inside dispatch in `Home`

export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async (tag,{rejectWithValue}) => {
        // write the async fetch function here
        // return the data as Promise
        console.log("checkin the tag coming from header",tag)
        if (tag==undefined || tag == null || tag==""){
            tag="harry"
        }
        console.log("tag is",tag)
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${tag}&type=movie`)
        const { data } = await response;
        if (data.Response === 'False'){
            
            return  rejectWithValue([{"error":"error"}])
        }
        
        return data.Search // data.Search contains the array of movie data

    }
)

// add new async function for fetching shows

export const fetchAsyncSeries = createAsyncThunk(
    'movies/fetchAsyncSeries',
    async (tag,{rejectWithValue}) => {
        console.log("checkin the tag coming from header",tag)
        if (tag==undefined || tag == null || tag.trim()==""){
            tag="harry"
        }
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${tag}&type=series`)
        const { data } = await response;
        if (data.Response === 'False'){
            
            return  rejectWithValue([{"error":"error"}])
        }
        
        return data.Search // data.Search contains the array of movie data
    }
)

// add async function for fetching details of movies or series

export const fetchAsyncMovieOrSeriesDetails = createAsyncThunk(
    'movies/fetchAsyncMovieOrSeriesDetails',
    async (id) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        const { data } = await response;
        return data
    }
)




const initialState = {
    movies : [],
    series: [],
    selectedMovieOrSeriesDetails: {},
    searchText: "",
    // movieFetchError : false,
    // seriesFetchError : false
}

// handle the actions in reducers (extraReducers)

const movieSlice = createSlice({
    name:"movies",
    initialState:initialState,
    reducers:{
        removeMovieOrSeriesDetail: (state) => {
            state.selectedMovieOrSeriesDetails = {};
        },
        setSearchText: (state, {payload}) => {
            state.searchText = payload
        }
    },
    //extra reducers for thunk
    extraReducers:  {
        [fetchAsyncMovies.pending]: (state, {payload}) => {
            console.log("movie request pending")
            return {...state, movies:[]}
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("successfully fetched movies")
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: (state, {payload}) => {
            console.log("rejected movies", payload)
            return {...state, movies:payload}
        },
        [fetchAsyncSeries.pending]: (state, {payload}) => {
            console.log("series request pending")
            return {...state, series:[]}
        },
        [fetchAsyncSeries.fulfilled]: (state, {payload}) => {
            console.log("successfully fetched series")
            return {...state, series:payload}
        },
        [fetchAsyncSeries.rejected]: (state, {payload}) => {
            console.log("rejected series", payload)
            return {...state, series:payload}
        },

        [fetchAsyncMovieOrSeriesDetails.fulfilled]: (state, {payload}) => {
            console.log("successfully fetched details")
            return {...state, selectedMovieOrSeriesDetails:payload}
        }

    }
})

// .actions will be used inside dispatch (provoded by useDispatch())
export const {removeMovieOrSeriesDetail, setSearchText,setMovieFetchError, setSeriesFetchError} = movieSlice.actions;

// below function are used by useSelector to collect the data
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSelectedMovieOrSeriesDetail = (state) => state.movies.selectedMovieOrSeriesDetails
export const getSearchText = (state) => state.movies.searchText;
//used by store inside configure store function , reducer : {}
export default movieSlice.reducer;


{/*
    {payload in addmovies function comes from action.payload}
    movieSlice.actions basically returns reducers like addMovies for us to export and use
    
    getAllMovies = (state) => state.movies.movies
    here first movies is name of the slice and 2nd movies is key of the initialState object

*/}

