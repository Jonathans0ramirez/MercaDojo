const { getItemById, getDescription } = require('./items')
const { searchProducts } = require('./search')
const { getUserById } = require('./users')

const getAllProductsFormatted = (querySeacrh) => {
    return searchProducts(querySeacrh).then(data => data)
        .then(response => {
            return Promise.all(response.map(res => {
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
            })).then(res => res)
        })
}

module.exports = { getAllProductsFormatted }