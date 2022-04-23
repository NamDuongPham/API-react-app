import React, { Component } from "react";
import ShoesItem from "./ShoesItem";

export default class ShoesList extends Component {
  renderProductList = () => {
    const productList = this.props.productList;
    const handleChangeProductDetail = this.props.handleChangeProductDetail;
    return productList.map((product, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <ShoesItem
            product={product}
            handleChangeProductDetail={handleChangeProductDetail}
          ></ShoesItem>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container mt-4 d-flex mb-5">
        <div className="row">{this.renderProductList()}</div>
      </div>
    );
  }
}
