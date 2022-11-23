import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.c';
// const URL = 'https://travel-advisor.p.rapidapi.com/attractions/list-in-boundary';





export const getPlacesData = async (sw, ne) =>{
    try{

        const {data: {data}} = await axios.get(URL, {
          params: {
            tr_longitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            bl_latitude: ne.lng,
          },
          headers: {
            // 'X-RapidAPI-Key': '9419b1eac6msh08c03cc7f358782p117134jsn37a99a54484f',
            'X-RapidAPI-Key': '9419b1eac6msh08c03cc7f358782p',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        return data;
    }catch(error){
        console.log(error)
    }
}