import React, { Component } from "react";

export class DiceItem extends Component {
  render() {
    return (
      <img src={this.props.dice.imgSrc} width={50} height={50} alt="hinh" />
    );
  }
}

export default DiceItem;
