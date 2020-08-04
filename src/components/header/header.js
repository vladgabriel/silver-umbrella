import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="site-navbar site-navbar-target" role="banner">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-3">
            <div className="site-logo">
              <a href="index.html" className="font-weight-bold">
                Monarchy
              </a>
            </div>
          </div>

          <div className="col-9  text-right">
            <span className="d-inline-block d-lg-none">
              <a href="#" className="text-primary site-menu-toggle js-menu-toggle py-5">
                <span className="icon-menu h3 text-primary"></span>
              </a>
            </span>

            <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
              <ul className="site-menu main-menu js-clone-nav ml-auto ">
                <li className="active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="portfolio.html" className="nav-link">
                    Portfolio
                  </a>
                </li>
                <li>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <a href="services.html" className="nav-link">
                    Services
                  </a>
                </li>
                <li>
                  <a href="blog.html" className="nav-link">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="contact.html" className="nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
