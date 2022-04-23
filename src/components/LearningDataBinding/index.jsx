import React, { Component } from "react";

export default class LearningDataBinding extends Component {
  url =
    "https://petmaster.vn/petroom/wp-content/uploads/2020/03/thanh-bieu-cam-cho-husky.jpg";
  name = "husky";

  listPk = ["chuong", "Ao", "mac kinh"];

  renderListPk() {
    const kq = this.listPk.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
    return kq;
  }

  render() {
    const age = 1;
    return (
      <div>
        <img src={this.url} alt="hinh husky" />
        <p>
          Name : <span> {this.name} </span>
        </p>
        <p>
          Age : <span> {age} </span>
        </p>
        <p>Phụ Kiện : </p>
        <ul>{this.renderListPk()}</ul>
      </div>
    );
  }
}
