import React, { Component } from "react";
import { connect } from "react-redux";

export class BtnChoiceTaiXiu extends Component {
  renderNameBtn = () => {
    if (this.props.status) {
      return "TÀI";
    } else {
      return "XỈU";
    }
  };
  creatClassNameBtn = () => {
    if ((this.props.status)) {
      return "bg-danger display-4 p-5 text-light";
    } else {
      return "bg-dark display-4 p-5 text-light";
    }
  };
  handleChoice=(status)=>{
this.props.choice(status);
  }
  render() {
    return (
      <button className={this.creatClassNameBtn()}onClick={()=>this.handleChoice(this.props.status)}>
        {/* {this.props.status ? "TÀI" : "XỈU"}I{" "} */}
        {this.renderNameBtn()}
        
      </button>
    );
  }
}
const mapDispatchToProps=(dispatch)=>{
return{
  choice:(status)=>{
    const action={
      type:"HANDLE_CHOICE",
      payload:status,
    };
    dispatch(action)
  }
}
}
export default connect(null,mapDispatchToProps)(BtnChoiceTaiXiu);
