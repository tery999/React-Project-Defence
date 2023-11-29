const URL = "http://localhost:3030/users/login"
export const login = async (email, password) => {
    try {
    const response = await fetch(URL, {
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