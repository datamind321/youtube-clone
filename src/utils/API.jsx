import axios from "axios";

const BASE_URL = 'https://youtube138.p.rapidapi.com'
const API_KEY = import.meta.env.VITE_API_KEY
const options = {
    method: 'GET',
    
    params: {
      
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key':'78ac476038msh049755cbf87979fp191da0jsn5b9dbc88576d',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };

  export const FetchDATAFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    return data
  } 