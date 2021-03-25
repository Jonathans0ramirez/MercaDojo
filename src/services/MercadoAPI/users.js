const getUserById = (userId) => {
    return fetch(`${process.env.REACT_APP_MERCADOLIBRE_API_URL}users/${userId}`)
        .then(response => response.json())
        .catch(err => err);
}

export { getUserById }