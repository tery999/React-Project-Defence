import { useContext } from "react";
import AuthContext from "../context/authContext";

const URL = "http://localhost:3030/data/comments";


export const createComment = async (productId, comment) => {
    const token = localStorage.getItem("accessToken");
    const newComment = await fetch( URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token,
          },
          body: JSON.stringify( {productId, comment})

    });
    console.log( `TOKEN IS` , token);

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

export const deleteComment = async (commentId) => {
    const token = localStorage.getItem("accessToken");
    const deletedComment = await fetch( `${URL}/${commentId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token,
          },

    });

};