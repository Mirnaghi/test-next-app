import axios from 'axios';

const baseURL = 'http://138.68.91.222';

export const getPaths = async () => {
    const response = await axios.get(`${baseURL}/api/paths/all`).then(response => {
        return response;
    }).then(value => value)
    return response.data;
}

export const createPath = async (data) => {
    console.log("Path create data in service: ", data.newPath)
    const response = await axios.post(
        `${baseURL}/api/paths/new`, 
        data.newPath, 
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.token}` 
            }
        }
    ).then(res => {
        return res
    }).then(result => result)
    console.log(response)
    return response.data
}

export const getCourses = async (id) => {
    const courses = await axios.get(`${baseURL}/api/paths/${id}/courses`)
        .then(response => response)
        .then(res => res.data)

    console.log(courses)
    return courses

} 
