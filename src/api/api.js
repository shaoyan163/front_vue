import axios from 'axios'

const host = "https://dog.ceo";
export const dogs=() =>{
    return axios.get( `${host}/api/breeds/image/random`)
};