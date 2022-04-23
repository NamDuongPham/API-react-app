import React, { Component } from "react";

export default class ShoesItem extends Component {
  handleClick = () => {
    const handleChangeProductDetail= this.handleChangeProductDetail;
    const proDetail=this.props.product;
    this.props.handleChangeProductDetail(proDetail)
  };
  render() {
    const product = this.props.product;
    return (
      <div className="card" style={{ width: 350 }}>
        <img className="card-img-top w-100" src={product.image} alt="dfdfds" />
        <div className="card-body">
          <h2 className="card-title" style={{ textAlign: "center" }}>
            ADIDAS
          </h2>
          <div className="d-flex justify-content-between">
            <p> {product.name}</p>
            <p card-text mr-4 text-success>
              {product.price}$
            </p>
          </div>
          <button className="btn btn-success" style={{ marginLeft: 120 }} onClick={this.handleClick}>
            more
          </button>
        </div>
      </div>
    );
  }
}
