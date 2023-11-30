import { useContext } from "react";
import AuthContext from "../context/authContext";

const URL = "http://localhost:3030/data/comments";

const token = localStorage.getItem("accessToken");
export const createComment = async (id, comment) => {
    const newComment = await fetch( URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token,
          },
          body: JSON.stringify( {id, comment})

    });

    const result = await newComment.json();
    return result;
};

export const getAllCurComments = async (id) => {
    const query = new URLSearchParams({
        where: `id="${id}"`,
    })
    const response = await fetch(`${URL}?${query}`);
    if (!response.ok) {
        return [] ;
    }
    const result = await response.json();
    return result;
};