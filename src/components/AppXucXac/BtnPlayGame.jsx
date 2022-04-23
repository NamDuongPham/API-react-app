import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleResultAction,
  playGameAction,
} from "redux/reducers/actions/xucXacActions";

export class BtnPlayGame extends Component {
  handlePlayGame = () => {
    let i = 0;
    const counterInterval = setInterval(() => {
      this.props.playGame();
      i++;
      if (i > 10) {
        // đi tính kết quả
        this.props.handleResult();
        clearInterval(counterInterval);
      }
    }, 100);
  };
  render() {
    return (
      <button
        className="btn btn-success"
        style={{ fontSize: 30 }}
        onClick={() => {
          this.handlePlayGame();
        }}
      >
        PLAY GAME
      </button>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      dispatch(playGameAction());
    },
    handleResult: () => {
      dispatch(handleResultAction());
    },
  };
};
export default connect(null, mapDispatchToProps)(BtnPlayGame);
