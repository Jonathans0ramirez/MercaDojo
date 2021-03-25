const searchProducts = (querySeacrh, offset) => {
    return fetch(`${process.env.REACT_APP_MERCADOLIBRE_API_URL}sites/MCO/search?q=${querySeacrh}&limit=30&offset=${offset}`)
        .then(response => response.json())
        .catch(err => err);
}

export { searchProducts }