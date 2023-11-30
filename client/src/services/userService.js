const URL_LOGIN = "http://localhost:3030/users/login"
const URL_REGISTER = "http://localhost:3030/users/register"
const URL_LOGOUT = "http://localhost:3030/users/logout"

const token = localStorage.getItem("accessToken");
export const login = async (email, password) => {
    try {
    const response = await fetch(URL_LOGIN, {
        method: "POST",
        headers: {
            "content-type": "aplication/json"
        },
        body: JSON.stringify({ email, password })
    })

    return response.json();
} catch (error) {
    return error;
}
}

export const register = async (email, password ) => {
    const response = await fetch(URL_REGISTER, {
        method: "POST",
        headers: {
            "content-type": "aplication/json"
        },
        body: JSON.stringify({ email, password })
    })
}

export const logout = async () => {
    const response = await fetch(URL_LOGOUT, {
        method: "GET",
        headers: {
            "content-type": "aplication/json",
            "X-Authorization": token,
        }
        
    })
    console.log(token);
}