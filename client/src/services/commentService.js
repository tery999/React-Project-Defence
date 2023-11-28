const URL = "http://localhost:3030/jsonstore/comments";

export const createComment = async (id, user, comment) => {
    const newComment = await fetch( URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify( {id, user, comment})

    })

    return newComment;
}

export const getAllCurComments = async () => {
    const response = await fetch( URL );
    const result = await response.json();
    return Object.values(result);
}