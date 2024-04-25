import React from "react";
import BodyContent from "./BodyContent";

function Body() {
  return (
    <div>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">
                <font style={{ "vertical-align": "inherit" }}>
                  <font style={{ "vertical-align": "inherit" }}>
                    Example album
                  </font>
                </font>
              </h1>
              <p className="lead text-body-secondary">
                <font style={{ "vertical-align": "inherit" }}>
                  <font style={{ "vertical-align": "inherit" }}>
                    A short description about the album below (its contents,
                    origin, etc.). Keep it short and sweet, but not too short
                    that people won't skip this album completely.
                  </font>
                </font>
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2">
                  <font style={{ "vertical-align": "inherit" }}>
                    <font style={{ "vertical-align": "inherit" }}>
                      The main call to action
                    </font>
                  </font>
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  <font style={{ "vertical-align": "inherit" }}>
                    <font style={{ "vertical-align": "inherit" }}>
                      Secondary work
                    </font>
                  </font>
                </a>
              </p>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <BodyContent />
              <BodyContent />
              <BodyContent />
              <BodyContent />
              <BodyContent />
              <BodyContent />
              <BodyContent />
              <BodyContent />
              <BodyContent />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Body;
