const searchProducts = (querySeacrh, offset = 0) => {
    return fetch(`${process.env.REACT_APP_MERCADOLIBRE_API_URL}sites/MCO/search?q=${querySeacrh}&limit=10&offset=${offset}`)
        .then(response => response.json())
        .then(data => data.results)
        .catch(err => err);
}

module.exports = { searchProducts }