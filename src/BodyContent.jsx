import React from "react";

function BodyContent() {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          src={"https://ui-avatars.com/api/?name=John+Doe"}
          alt={""}
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        />

        <div className="card-body">
          <p className="card-text">
            <font style={{ "vertical-align": "inherit" }}>
              <font style={{ "vertical-align": "inherit" }}>
                This is a wider card with supporting text below as a natural
                introduction to additional content. This content is a little
                longer.
              </font>
            </font>
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <font style={{ "vertical-align": "inherit" }}>
                  <font style={{ "vertical-align": "inherit" }}>an offer</font>
                </font>
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                <font style={{ "vertical-align": "inherit" }}>
                  <font style={{ "vertical-align": "inherit" }}>amendment</font>
                </font>
              </button>
            </div>
            <small className="text-body-secondary">
              <font style={{ "vertical-align": "inherit" }}>
                <font style={{ "vertical-align": "inherit" }}>9 minutes</font>
              </font>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyContent;
