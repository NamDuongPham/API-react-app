import React, { Component } from "react";
import { connect } from "react-redux";
import DiceItem from "./DiceItem";

export class DiceList extends Component {
  renderDiceList() {
    return this.props.diceList.map((dice, index) => {
      return <DiceItem dice={dice} key={index}></DiceItem>;
    });
  }
  render() {
    return (
      <div className="d-flex justify-content-center">
        {this.renderDiceList()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    diceList: state.xucXac.diceList,
  };
};
export default connect(mapStateToProps)(DiceList);
