import React from "react";

import ReactDOM from "react-dom";
import "./Modal.css";
import iconClose from "../Assets/icons/Icon_close_circle.png";

// import Close from "./times-solid.svg";

// import Close from "./times-solid.svg";

const Modal = ({
  show,
  close,
  title,
  children,
  content,
  sMessage,
  price,
  yesClick,
}) => {
  let servieTax = (price * 14) / 100;
  let SBTax = (price * 0.5) / 100;
  let KSTax = (price * 0.5) / 100;
  let grandTotal = price + servieTax + SBTax + KSTax;

  return ReactDOM.createPortal(
    <>
      {show ? (
        <div className="modalContainer" onClick={() => close()}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal_header1">
              <h1 className="modal_header-title"> {title} </h1>
              <button className="close" onClick={() => close()}>
                <img src={iconClose} alt="close" />
              </button>
            </div>
            <main className="modal_content">
              <h2>{sMessage}</h2>
              {title == "Success!" && (
                <div className="inVoiceContent">
                  <p>Subtotal: Rs. {price}</p>
                  <p>Service Tax @14%: Rs. {servieTax}</p>

                  <p>Swachh Bharat Cess @0.5%: Rs.{SBTax}</p>
                  <p>Krishi Kalyan Cess @0.5%: Rs. {KSTax}</p>
                  <p>
                    Total: Rs.{" "}
                    <span className="boldFont">{grandTotal.toFixed(2)}</span>
                  </p>
                </div>
              )}
            </main>
            <footer className="modal_footer">
              <p>Would you like to continue (Yes/No)</p>

              <div className="CtaDiv">
                <button className="modal-close" onClick={() => close()}>
                  No
                </button>

                <button className="modal-yes" onClick={yesClick}>
                  Yes
                </button>
              </div>
            </footer>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
