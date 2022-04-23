import React, { Component } from "react";
import { connect } from "react-redux";
export class Result extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          bạn chọn : <span className="text-danger">{this.props.yourChoice ?"Tài" :"Xỉu"}</span>
        </div>
        <div>
          số bàn thắng : <span className="text-success">{this.props.amountWin}</span>
        </div>
        <div>
          tổng số bàn chơi : <span className="text-warning">{this.props.amountPlay}</span>
        </div>
      </React.Fragment>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    yourChoice: state.xucXac.yourChoice,
    amountWin: state.xucXac.amountWin,
    amountPlay: state.xucXac.amountPlay,
  };
};
export default connect(mapStatetoProps)(Result);
 