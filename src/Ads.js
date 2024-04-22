// Syntax for importing exported array is { ads }. Array const must be exported.
import { ads } from "./Data.js";
import Data from "./Data.json";

const Ads = () => {
  return (
    <div>
      <ShowAds ads={Data} />
 {/*     <ShowAds ads={ads} />   */}
    </div>
  );

  function ShowAds(props) {
    const ads = props.ads;

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
            <div class="mb-4">
              <label for="filterTitle">Filter by Title:</label>
              <input
                type="text"
                className="form-control"
                id="filterTitle"
                placeholder="Enter title"
              />
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {ads.map((ad) => (
                <div className="col">
                  <div className="card shadow-sm">
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="225"
                      xmlns={ad.adImage}
                      role="img"
                      aria-label="Placeholder: Thumbnail"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>{ad.hoverTitle}</title>
                      <rect width="100%" height="100%" fill="#55595c" />
                      <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                        Ad Photo
                      </text>
                    </svg>
                    <div className="card-body">
                      <h5 className="card-title">{ad.adTitle}</h5>
                      <p className="card-text">{ad.text}</p>
                      <p
                        className="card-text"
                        onClick="alert('Contact: {adObject.contact}')"
                      >
                        Contact: {ad.contact}
                      </p>
                      <div className="d-flex justify-content-between align-items-center"></div>
                    </div>
                    <div className="card-footer text-center">
                      <button
                        className="btn btn-info"
                        onClick="alert('Contact: contact5@example.com')"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div class="py-5 text-center container"></div>
        </div>
      </>
    );
  }
};

export default Ads;
