import React, { Component } from "react";
import Flexbox from "flexbox-react";

import "../css/Modal.css";

export class Modal extends Component {
  render() {
    let x = this.props;

    const modalStyle = {
      display: `${x.showModal}`,
      position: "fixed",
      zIndex: "100",
      paddingTop: "100px",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      overflow: "auto",
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    };

    const modalContent = {
      margin: "auto",
      // display: 'inline',
      color: "#f1f1f1",
      textAlign: "center"
    };

    return (
      <Flexbox className="all-use-modal" style={modalStyle}>
        <p
          className="link"
          onClick={() => {
            x.closeModal("none");
          }}
          style={modalContent}
        >
          close
        </p>

        <div className="content-wrapper">{x.content}</div>
      </Flexbox>
    );
  }
}

export default Modal;
