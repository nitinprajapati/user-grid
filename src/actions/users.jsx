export const fectchUsers = () => {
    return {
        type : "FETCH_USERS"
    }
}

export const deleteUser = (element) => {
    return {
        type : "DELETE_USER",
        element: element
    }
}