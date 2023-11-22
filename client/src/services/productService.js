const URL = "http://localhost:3030/jsonstore/products" ;

export const getAll = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    return data;
};