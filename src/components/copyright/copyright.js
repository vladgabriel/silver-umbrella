import React from 'react';

export default function Copyright() {
  const date = new Date().getFullYear()
  return (
    <div className="site-section pt-0 copyright">
      <div className="container">
        <div className="row mb-4 text-center">
          <div className="col">
            <a href="#"><span className="m-2 icon-facebook"></span></a>
            <a href="#"><span className="m-2 icon-twitter"></span></a>
            <a href="#"><span className="m-2 icon-linkedin"></span></a>
            <a href="#"><span className="m-2 icon-instagram"></span></a>
            <a href="#"><span className="m-2 icon-skype"></span></a>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-7 text-center">
            <p>
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              Copyright &copy;{date} All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" >Colorlib</a>
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}