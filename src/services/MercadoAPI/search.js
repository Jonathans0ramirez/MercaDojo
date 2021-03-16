const searchItems = (querySeacrh) => {
    return fetch(`${process.env.REACT_APP_MERCADOLIBRE_API_URL}search?q=${querySeacrh}&limit=10`)
        .then(response => response.json())
        .then(data => data.results)
        .catch(err => err);
}

module.exports = { searchItems }