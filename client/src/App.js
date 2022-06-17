import React from "react";
import { gql } from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import Product from "./components/product/product";

//  query graphql for list all products and specified fields object product
const GET_PRODUCTS = gql`
    query {
        products {
            id
            title
            price
            image
        }
    }
`;

const App = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    if (error) return <h1>Ups, something went wrong!</h1>
    if (loading) return <h1>loading ...</h1>
    return (
        <main>
            <h1>NEM | Products</h1>
            {
                data.products.map(product => {
                    return(
                        <Product key={product.id} product={product} />
                    );
                })
            }
        </main>
    );
};

export default App;
