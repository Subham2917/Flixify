import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmODUyNWVkZmYyMDlkMWQzZDdjMDkwOWM2MmI5MmU5NSIsInN1YiI6IjY1YThkYmVkZmM1ZjA2MDEyZWJhY2YwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QtS45a_sWNsdrd0Z4i0VjUMjsP_HzLXDjYmpfDeUrJk";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async(url, params) => {
    try{
        const {data} = await axios.get(BASE_URL + url, {
            headers, //headers and params are configuration
            params
        })
        return data;

    }catch(err){
        console.log(err);
        return err;
    }
}