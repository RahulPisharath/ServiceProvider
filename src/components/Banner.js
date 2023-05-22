import React from 'react'

const Banner = () => {
return (
<div className="banner-bg py-5">
  <div className="container">
    <div className='row'>
      

      <div className="col-sm-12 col-md-6 d-flex head_option_bg">
        <div className="dropdown mx-4">
          <button className="btn btn-themed dropdown-toggle text-white" type="button" data-bs-toggle="dropdown"
            aria-expanded="false">
            Location
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item" type="button">
                Dropdown item
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Dropdown item
              </button>
            </li>
            <li>
              <button className="dropdown-item" type="button">
                Dropdown item
              </button>
            </li>
          </ul>
        </div>
        <div className="input-group">
          <input type="text" className="form_control input" placeholder="Search Item" />
          <div className="input-group-append themed">
            <button className="btn btn-themed" type="button">
              <span className="material-symbols-outlined text-white">
                search
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6">
        <h2 className="text-white py-4 heading_banner">
          GET START
          <br />
          YOUR FAVOURITE SHOPING
        </h2>
      </div>
    </div>

  </div>
</div>
)
}

export default Banner