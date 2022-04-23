import React, { Component } from "react";
import BtnChoiceTaiXiu from "./BtnChoiceTaiXiu";
import DiceList from "./DiceList"

export class ControlGame extends Component {
  render() {
    return (
      <div className="row text-center">
          <div className="col-4">
        <BtnChoiceTaiXiu status={true}></BtnChoiceTaiXiu>
      </div>
        <div className="col-4">
         <DiceList></DiceList>
        </div>
        <div className="col-4">
        <BtnChoiceTaiXiu status={false}></BtnChoiceTaiXiu>
        </div>
      </div>
    );
  }
}

export default ControlGame;
