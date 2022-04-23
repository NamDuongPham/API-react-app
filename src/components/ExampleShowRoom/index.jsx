import React, { Component } from "react";
import IconsBlack from "../../assets/images/icon-black.jpg";
export default class ExampleShowRoom extends Component {
  state = {
    imgSrcCar: "./img/car/products/black-car.jpg",
  };
  srcCar = "./img/car/products/black-car.jpg";
  handleClick(color) {
    switch (color) {
      case "black":
        this.srcCar = "./img/car/products/black-car.jpg";
        this.setState({
          imgSrcCar: "./img/car/products/black-car.jpg",
        });
        break;
      case "red":
        this.srcCar = "./img/car/products/red-car.jpg";
        this.setState({
          imgSrcCar: "./img/car/products/red-car.jpg",
        });
        break;
      case "silver":
        this.srcCar = "./img/car/products/silver-car.jpg";
        this.setState({
          imgSrcCar: "./img/car/products/silver-car.jpg",
        });
        break;
      case "steel":
        this.srcCar = "./img/car/products/steel-car.jpg";
        this.setState({
          imgSrcCar: "./img/car/products/steel-car.jpg",
        });
        break;
      default:
        this.srcCar = "./img/car/products/black-car.jpg";
        this.setState({
          imgSrcCar: "./img/car/products/black-car.jpg",
        });
        break;
    }
    // this.forceUpdate(); // thường dùng trong vấn đề fix bug : giá trị thay đổi nhưng ui ko đổi
    console.log(this.srcCar);
  }
  render() {
    console.log("render run");
    return (
      <section className="show-room">
        <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
        <div className="container">
          <div className="chose__color d-flex justify-content-around">
            <button className="btn" onClick={() => this.handleClick("black")}>
              <img src={IconsBlack} alt="hinh" style={{ width: 50 }} />
            </button>
            <button className="btn" onClick={() => this.handleClick("red")}>
              <img
                src="./img/car/icons/icon-red.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button className="btn" onClick={() => this.handleClick("silver")}>
              <img
                src="./img/car/icons/icon-silver.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
            <button className="btn" onClick={() => this.handleClick("steel")}>
              <img
                src="./img/car/icons/icon-steel.jpg"
                alt="hinh"
                style={{ width: 50 }}
              />
            </button>
          </div>
          <h1>forceUpdate</h1>
          <div className="car mt-2">
            <img className="img-thumbnail" src={this.srcCar} alt="hinh" />
          </div>
          <h1>State</h1>
          <div className="car mt-2">
            <img
              className="img-thumbnail"
              src={this.state.imgSrcCar}
              alt="hinh"
            />
          </div>
        </div>
      </section>
    );
  }
}
