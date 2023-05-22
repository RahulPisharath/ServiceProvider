import React from "react";

const Banner = () => {
  return (
    <div className="banner-bg py-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white py-4 heading_banner text-center">
              All Your Needs In
              <br />
              One Place
            </h2>
          </div>

          <div className="col-6 mx-auto head_option_bg">
            <div className="input-group">
              <button
                className="btn btn-outline-secondary dropdown-toggle btn_themed"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Location
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action before
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action before
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with 2 dropdown buttons"
              />
              <button
                className="btn btn-outline-secondary btn_themed"
                type="button"
              >
                <i class="bi bi-search"></i>
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
