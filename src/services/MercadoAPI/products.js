const { getItemById, getDescription } = require('./items')
const { searchProducts } = require('./search')
const { getUserById } = require('./users')

const getAllProductsFormatted = (querySeacrh, offset = 0) => {
    return searchProducts(querySeacrh, offset).then(data => data)
        .then(response => {
            const results = response.results;
            return Promise.all(results.map(res => {
                const itemId = res.id;
                return getItemById(itemId).then(response => {
                    return getDescription(response.id).then(data => {
                        return getUserById(response.seller_id).then(seller => {
                            const resJSON = {
                                id: response.id,
                                title: response.title,
                                description: data.plain_text,
                                seller: seller.nickname,
                                thumbnail: response.thumbnail,
                                pictures: response.pictures,
                                price: response.price,
                                original_price: response.original_price
                            }
                            return resJSON;
                        })
                    });
                });
            })).then(res => {
                const generalValues = {
                    total: response.paging.total > 1000 ? 1000 : response.paging.total,
                    offset: response.paging.offset
                }
                const newRES = { items: res, ...generalValues };
                return newRES;
            })
        })
}

module.exports = { getAllProductsFormatted }