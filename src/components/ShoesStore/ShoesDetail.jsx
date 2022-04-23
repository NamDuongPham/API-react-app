import React, { Component } from "react";

export default class ShoesDetail extends Component {
  render() {
    const productDetail =this.props.productDetail
    return (
      <div className="row">
        <div className="col-sm-5">
          <img
            className="img-fluid"
            src={productDetail.image}
            alt="đấ"
          />
        </div>
        <div className="col-sm-7">
          <h3>chi tiết</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Tên sản phẩm</td>
                <td>{productDetail.name}</td>
              </tr>
              <tr>
                <td>Giá tiền</td>
                <td>{productDetail.price}$</td>
              </tr>
              <tr>
                <td>Description</td>
                <td>{productDetail.description}</td>
              </tr>
              <tr>
                <td>Short Description</td>
                <td>{productDetail.shortDescription}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
