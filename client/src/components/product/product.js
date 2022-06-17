import React from "react";
import "./product.css";

const Product = ({ product: { id, title, price, image } }) => {
    return (
        <div className="col-md-4 mb-3">
            <div className="card h-100 mt-3" style={{ width: "18rem" }} >
                <img src={image} className="card-img-top p-3" alt="Card Product" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">$ {price}</p>
                </div>
                <div className="card-footer bg-transparent">
                    <a href="#" className="btn btn-primary">ver detalle</a>
                </div>
            </div>
        </div>
    );
};

export default Product;
