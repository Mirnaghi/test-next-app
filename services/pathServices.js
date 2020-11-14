import axios from 'axios';

const baseURL = 'http://138.68.91.222';

export const getPathes = async () => {
    const response = await axios.get(`${baseURL}/api/pathes/all`).then(response => {
        return response;
    }).then(value => value)
    return response.data;
}


