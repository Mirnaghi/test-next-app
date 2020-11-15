import axios from 'axios'


let config = {
    headers: {
        "Content-Type": "application/json",       
   }
} 

/*
http://138.68.91.222/api/auth/register
function to sign in user
params: register form data
return: response data from server 
*/ 
export const signInUserService = async (data) => {
    console.log("Inside service", data)
    const response = await axios.post('http://138.68.91.222/api/auth/register', data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            console.log("First then", response)
            if(response.data.status === 0) {
                return response.data
            } else {
                return response
            }
        })
        .catch(e => {return {data: {user: {}, status: 1}}})
        console.log("Response data: ", response)
        return response;
}


/*
function to login in user
params: login form data
return: response data from server 
*/ 
export const logInUserService = async (data) => {
    const response = await axios.post('http://138.68.91.222/api/auth/login', data, config)
    .then(response => response.data)
    .catch(e => {
        return {data: {user: {}, status: 2}}
    })

    return response
}