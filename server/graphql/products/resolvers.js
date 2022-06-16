const axios = require("axios");

const resolvers = {
    Query: {
        //  get all products list
        products: async () => {
            try {
                const products = await axios.get("https://fakestoreapi.com/products");
                return products.data.map(({
                    id, title, price, description, category, image, rating
                }) => ({
                    id, title, price, description, category, image, rating
                }));
            } catch (error) {
                throw error;
            }
        },
        //  get product by productId from list
        product: async (_, { productId }) => {
            try {
                const product = await axios.get(`https://fakestoreapi.com/products/${productId}`);
                return product.data;
            } catch (error) {
                throw error;
            }
        }
    },
};

module.exports = { resolvers };
