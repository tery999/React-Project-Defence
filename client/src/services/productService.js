const URL = "http://localhost:3030/data/products" ;


export const getAll = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
};

export const getOne = async (id) => {
    const response = await fetch(`${URL}/${id}`);
    const data = await response.json();

    return data;
};

export const create = async(data) => {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(URL , {
        method: "POST" ,
        headers: {
            "content-type": "aplication/json",
            "X-Authorization": token,
        },
        body: JSON.stringify(data)
    });

    const result = await response.json()
}

export const edit = async(data) => {
    const token = localStorage.getItem("accessToken");
    const response = await fetch(`${URL}/${data._id}`, {
        method: "PUT" ,
        headers: {
            "content-type": "aplication/json",
            "X-Authorization": token,
        },
        body: JSON.stringify(data)
    });

    const result = await response.json()
}