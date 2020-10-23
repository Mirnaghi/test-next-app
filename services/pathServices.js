import axios from 'axios';

const baseURL = 'http://localhost:3001/pathes';

export const getPathes = async () => {
    const response = await axios.get(baseURL).then(response => {
        return response;
    }).then(value => value)
    return response.data;
}


