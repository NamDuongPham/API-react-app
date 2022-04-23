import React, { Component } from "react";
import "assets/style/AppXucXac.css";
import ControlGame from "./ControlGame";
import Result from "./Result";
import BtnPlayGame from "./BtnPlayGame"
export class AppXucXac extends Component {
  render() {
    return (
      <div
        className="gameXucXac"
        style={{
          backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
          width: "100%",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <div className="container">
          <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
          <ControlGame></ControlGame>
        </div>
        <div className="container text-center display-4">
          <Result></Result>
          <BtnPlayGame/>
        </div>
      </div>
    );
  }
}

export default AppXucXac;
