import React, { Component } from "react";

export default class ProductItem extends Component {
  handleClick = () => {
    this.props.handleSetProDetail(this.props.prod);
  };
  handleAddProdToCart = () => {
    this.props.handleAddCart(this.props.prod);
  };
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.prod.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{this.props.prod.tenSP}</h4>
          <button className="btn btn-success" onClick={this.handleClick}>
            Chi tiết
          </button>
          <button className="btn btn-danger" onClick={this.handleAddProdToCart}>
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
