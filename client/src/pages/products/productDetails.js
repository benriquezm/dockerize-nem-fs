import React from "react";
//  import { gql } from "graphql-tag";
//  import { useQuery } from "@apollo/react-hooks";
import { useQuery, gql } from "@apollo/client";

import ProductDetails from "../../components/productDetails/productDetails";
import { useParams } from "react-router-dom";

//  method created for dynamic query for grtaphql
const query = (productId) => {
    const GET_PRODUCT = gql`
        query {
            product(productId: ${productId}) {
                id
                title
                price
                description
                category
                image
                rating {
                    count
                    rate
                }
            }
        }
    `;
    return GET_PRODUCT;
};

const ProductDetailsPage = () => {
    let { id } = useParams();
    //  console.log("[id]: ", id);
    /*const { loading, error, data } = useQuery(GET_PRODUCT, {
        variables: { productId: id }
    });*/
    const { loading, error, data } = useQuery(query(id));
    console.log("[loading]: ", loading);
    console.log("[error]: ", error);
    console.log("[data]: ", data);

    const showProduct = (productId) => {
        console.log("[productId]: ", productId);
        //  getProduct({ variables: { productId: id } });
    };

    showProduct(id);

    if (error) return <h1>Ups, something went wrong!</h1>
    if (loading) return <h1>loading ...</h1>

    const { product } = data || {};
    return (
        <main>
            <div className="container">
                <div className="row">
                    <h1>NEM | Product Details</h1>
                    <ProductDetails key={product.id} product={product} />
                </div>
            </div>
        </main>
    );
};

export default ProductDetailsPage;
