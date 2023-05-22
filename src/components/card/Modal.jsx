import React from "react";
import "./modal.css";

function Modal({ onClose, title, description }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <span className="close-icon">x</span>
        </button>
        <h2>{title}</h2>
        <p>Ingredients: {description}</p>
        {/* <button onClick={onClose}>Close</button> */}
      </div>
    </div>
  );
}

export default Modal;
