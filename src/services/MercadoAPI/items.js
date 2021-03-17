const getItemById = (itemId) => {
    return fetch(`${process.env.REACT_APP_MERCADOLIBRE_API_URL}items/${itemId}`)
        .then(response => response.json())
        .catch(err => err);
}

const getDescription = (itemId) => {
    return fetch(`${process.env.REACT_APP_MERCADOLIBRE_API_URL}items/${itemId}/description`)
        .then(response => response.json())
        .catch(err => err);
}

module.exports = { getItemById, getDescription }