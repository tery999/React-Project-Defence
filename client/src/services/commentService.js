import { useContext } from "react";
import AuthContext from "../context/authContext";

const URL = "http://localhost:3030/data/comments";

const token = localStorage.getItem("accessToken");
export const createComment = async (productId, comment) => {
    const newComment = await fetch( URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token,
          },
          body: JSON.stringify( {productId, comment})

    });

    const result = await newComment.json();
    return result;
};

export const getAllCurComments = async (productId) => {
    const query = new URLSearchParams({
        where: `productId="${productId}"`,
        load: `author=_ownerId:users`
    })
    const response = await fetch(`${URL}?${query}`);
    if (!response.ok) {
        return [] ;
    }
    const result = await response.json();
    console.log(result);
    return result;
};