import axios from 'axios';

const baseURL = 'http://138.68.91.222';

export const getPathes = async () => {
    const response = await axios.get(`${baseURL}/api/paths/all`).then(response => {
        return response;
    }).then(value => value)
    return response.data;
}

export const getCourses = async (id) => {
    const courses = await axios.get(`${baseURL}/api/pathes/${id}/courses`)
    .then(response => response)
    .then(res => res.data)
    
    console.log(courses)
    return courses

} 
