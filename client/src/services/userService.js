const URL_LOGIN = "http://localhost:3030/users/login"
const URL_REGISTER = "http://localhost:3030/users/register"
const URL_LOGOUT = "http://localhost:3030/users/logout"


export const login = async (email, password) => {
    try {
        const response = await fetch(URL_LOGIN, {
            method: "POST",
            headers: {
                "content-type": "aplication/json"
            },
            body: JSON.stringify({ email, password })
        })

        if (!response.ok) {
            throw Error("There has been an error");
        }

        return response.json();
    } catch (err) {
        console.log("HERE IS THE ERROR", err);
    }

}

export const register = async (email, password) => {
    try {
        const response = await fetch(URL_REGISTER, {
            method: "POST",
            headers: {
                "content-type": "aplication/json"
            },
            body: JSON.stringify({ email, password })
        })

        if (!response.ok) {
            throw Error("There has been an error");
        }

        return response.json();
    } catch (err) {
        console.log("Error at register function", err);
        throw Error(err);
    }
}

export const logout = async () => {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(URL_LOGOUT, {
        method: "GET",
        headers: {
            "content-type": "aplication/json",
            "X-Authorization": token,
        }

    })
    // console.log(token);
}