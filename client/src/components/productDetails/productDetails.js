import React from "react";
//  import { Link } from "react-router-dom";

import "./style.css";

const ProductDetails = ({ product: { id, title, price, image, description, category, rating } }) => {
    return (
        <div className="card mb-3" style={{maxWidth: "540px"}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={image} className="img-fluid rounded-start" alt="Image Detail Product" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="fw-bold">category: <span className="badge rounded-pill bg-info text-dark">{category}</span></p>
                        <h3 className="fw-bold text-danger">${price}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
