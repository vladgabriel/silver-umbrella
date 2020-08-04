import React from 'react';

export default function About() {
  return (
    <>
      <div className="site-section-cover">
        <div className="container">
          <div className="row align-items-center text-center justify-content-center">
            <div className="col-lg-7">
              <h1 className="mb-4">About Us</h1>
              <p className="lead mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque autem nulla quos suscipit laborum fugit
                aspernatur rem pariatur illo.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section about-me">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-5 mb-md-0">
              <img src="images/office.jpg" alt="Image" className="img-fluid" />
            </div>
            <div className="col-md-5 ml-auto">
              <h2 className="text-primary mb-5 font-weight-bold">Who We Are</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem officia nesciunt quas, laudantium ex
                rem voluptas quod, distinctio eum tenetur. Placeat, quisquam, consequatur. Quam expedita neque nostrum
                iusto commodi minima!
              </p>
              <p>
                Omnis, aspernatur, incidunt cum quo, nisi harum ea earum suscipit delectus explicabo unde saepe commodi
                modi fugiat nihil sint nam. Ullam, esse totam mollitia molestias ipsum odio aperiam, officiis nesciunt.
              </p>

              <div className="social_29128 mt-5">
                <a href="#">
                  <span className="icon-facebook"></span>
                </a>
                <a href="#">
                  <span className="icon-instagram"></span>
                </a>
                <a href="#">
                  <span className="icon-twitter"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="service-29191">
                <span className="wrap-icon mb-4 d-block">
                  <span className="icon-work"></span>
                </span>
                <h3 className="mb-3">Interface Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a
                  dolores.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-29191">
                <span className="wrap-icon mb-4 d-block">
                  <span className="icon-weekend"></span>
                </span>
                <h3 className="mb-3">Product Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a
                  dolores.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-29191">
                <span className="wrap-icon mb-4 d-block">
                  <span className="icon-wb_incandescent"></span>
                </span>
                <h3 className="mb-3">Quality Results</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti voluptatem reiciendis minus, a
                  dolores.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section pt-0">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-7 mx-auto text-center">
              <h2>Testimonials</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="client">
                <div className="d-flex name-photo align-items-center mb-4">
                  <div className="name">
                    <h3>Chad Hawkins</h3>
                    <span>Customer</span>
                  </div>
                  <div className="img ml-auto">
                    <img src="images/person_1.jpg" alt="Image" className="img-fluid" />
                  </div>
                </div>
                <div className="client-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus,
                  numquam et vero aliquam delectus accusantium quo!
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="client">
                <div className="d-flex name-photo align-items-center mb-4">
                  <div className="name">
                    <h3>Ayisha Atherton</h3>
                    <span>Customer</span>
                  </div>
                  <div className="img ml-auto">
                    <img src="images/person_2.jpg" alt="Image" className="img-fluid" />
                  </div>
                </div>
                <div className="client-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus,
                  numquam et vero aliquam delectus accusantium quo!
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="client">
                <div className="d-flex name-photo align-items-center mb-4">
                  <div className="name">
                    <h3>Riccardo Gilliam</h3>
                    <span>Customer</span>
                  </div>
                  <div className="img ml-auto">
                    <img src="images/person_3.jpg" alt="Image" className="img-fluid" />
                  </div>
                </div>
                <div className="client-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus,
                  numquam et vero aliquam delectus accusantium quo!
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <div className="client">
                <div className="d-flex name-photo align-items-center mb-4">
                  <div className="name">
                    <h3>Jasleen Dunkley</h3>
                    <span>Customer</span>
                  </div>
                  <div className="img ml-auto">
                    <img src="images/person_4.jpg" alt="Image" className="img-fluid" />
                  </div>
                </div>
                <div className="client-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui consequuntur rerum, iusto accusamus,
                  numquam et vero aliquam delectus accusantium quo!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
