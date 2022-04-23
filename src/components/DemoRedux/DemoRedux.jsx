import React, { Component } from "react";
import { connect } from "react-redux";

class DemoRedux extends Component {
  render() {
    return (
      <div className="container text-center my-5">
        <h1>Show Data từ Store</h1>
        <p>Count:{this.props.bienDem}</p>
        <button className="btn btn-danger" onClick={this.props.giamMot}>
          -
        </button>
        <button className="btn btn-success" onClick={this.props.tangMot}>
          +
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // ý nghĩa của hàm này là : lấy các state ở trên store về làm props của component
  return {
    // key là props của component ( tên gì cũng dc) : value là state ở trên store
    bienDem: state.demo.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  // ý nghĩa của hàm này là : tạo ra các phương thức giúp thay đổi giá trị trên store
  return {
    // key là props của component ( tên gì cũng dc) : value là phương thức giúo thay đổi giá trị trên store
    tangMot: () => {
      const action = {
        type: "INCREMENT", // type là bắt buộc phải có khi dùng dispatch, VIẾT IN HOA KHI HẰNG SỐ KO ĐỔI
      };
      // gửi tín hiệu lên store(vd:gửi tín hiệu INCREMENT thì store sẽ nhận tín hiệu và thực thi tăng 1 cho countS)
      dispatch(action);
    },
    giamMot: () => {
      const action = {
        type: "DECREMENT",
        payload: {
          numberDecrement: 2,
        },
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);
