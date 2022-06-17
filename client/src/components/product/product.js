import React from "react";

const Product = ({ product: { id, title, price, image } }) => {
    return (
        <div className="card" style={{ width: "18rem" }} >
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{price}</p>
                <a href="#" className="btn btn-primary">ver detalle</a>
            </div>
        </div>
    );
};

export default Product;
