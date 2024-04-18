import React, { Component } from "react";

class Ads extends Component {
  render() {
    return (
      <>
        <section class="py-3 text-center container">
          <div class="row py-lg-5">
            <div class="col-lg-6 col-md-8 mx-auto">
              <h1 class="fw-light">Advertisement List</h1>
            </div>
          </div>
        </section>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            {/* Filter component */}
            <div class="mb-4">
              <label for="filterTitle">Filter by Title:</label>
              <input
                type="text"
                className="form-control"
                id="filterTitle"
                placeholder="Enter title"
              ></input>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <Ad />
              <Ad />
              <Ad />
              <Ad />
              <Ad />
              <Ad />
              <Ad />
              <Ad />
              <Ad />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export const Ad = () => {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <title>Placeholder</title>
          <rect width="100%" height="100%" fill="#55595c" />
          <text x="50%" y="50%" fill="#eceeef" dy=".3em">
            Ad Photo
          </text>
        </svg>
        <div className="card-body">
          <h5 className="card-title">Title</h5>
          <p className="card-text">This is the first advertisement.</p>
          <p
            className="card-text"
            onclick="alert('Contact: contact5@example.com')"
          >
            Contact: ***
          </p>
          <div className="d-flex justify-content-between align-items-center"></div>
        </div>
        <div className="card-footer text-center">
          <button
            className="btn btn-info"
            onclick="alert('Contact: contact5@example.com')"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ads;