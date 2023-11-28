const URL = "http://localhost:3030/jsonstore/comments";

export const createComment = async (id, user, comment) => {
    const newComment = await fetch( URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify( {id, user, comment})

    })

    const result = await newComment.json();
    return result;
}

export const getAllCurComments = async (id) => {
    const response = await fetch( URL );
    const result = await response.json();
    const filtered = await Object.values(result).filter(comment => comment.id === id);
    return filtered
}