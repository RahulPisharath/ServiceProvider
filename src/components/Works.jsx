import React from 'react'

const Works = () => {
  return (
      <div className='container'>
          <div className='row justify-content-md-center'>
              <div className='col-md-auto'>
              <div className='col-center'>
        <ul className='list-style-none d-flex my-3 col_list_ul'>
        <li className='col-12 col-md-4'>
                <div className='bg_theme_1'>
                    <h4 className='heading_h4'>Step 1</h4>
                    <p>Lorem ipsum dummy text generator over herer!!!</p>
                </div>
            </li>
            <li className='col-12 col-md-4'>
                <div className='bg_theme_1'>
                <h4 className='heading_h4'>Step 2</h4>
                    <p>Lorem ipsum dummy text generator over herer!!!</p>
                </div>
            </li>
            <li className='col-12 col-md-4'>
                <div className='bg_theme_1'>
                <h4 className='heading_h4'>Step 3</h4>
                    <p>Lorem ipsum dummy text generator over herer!!!</p>
                </div>
            </li>
        </ul>
       <div className='text-center'>
       <button type='button' className='btn btn-themed'>Book Apointment</button>
       </div>
    </div>
              </div>
          </div>
      </div>
   
  )
}

export default Works