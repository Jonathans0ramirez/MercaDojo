const searchItems = (querySeacrh) => {
    return fetch(`${process.env.MERCADOLIBRE_API_URL}search?q=${querySeacrh}`)
        .then(response => response.json())
        .catch(err => err);
}