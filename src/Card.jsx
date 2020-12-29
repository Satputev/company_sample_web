import React from "react";
import { NavLink } from "react-router-dom";
const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img
            src={props.imgsrc}
            className="card-img-top"
            id="card__img"
            alt={props.imgsrc}
          />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.desc}</p>

            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target="#staticBackdrop"
            >
              View more details
            </button>

            <div
              class="modal fade"
              id="staticBackdrop"
              data-backdrop="static"
              data-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5
                      class="modal-title"
                      id="staticBackdropLabel"
                      style={{
                        color: "red",
                        fontWeight: "bold",
                        fontSize: "30px",
                      }}
                    >
                      {props.title}
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true" style={{ color: "red" }}>
                        &times;
                      </span>
                    </button>
                  </div>
                  <div class="modal-body" style={{ color: "blue " }}>
                    {props.detail}
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-info"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
