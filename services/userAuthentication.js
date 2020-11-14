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
    const response = await axios.post('http://138.68.91.222/api/auth/register', {
        nickname: data.nickname,
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        password: data.password,
        role: 0
    })
        .then(response => {
            console.log("First then", response)
            return response
        })
        .catch(e => {return {user: {}, status: 1}})
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
    .then(response => response)

    return response.data
}