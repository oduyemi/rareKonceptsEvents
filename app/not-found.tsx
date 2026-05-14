export default function Custom404() {
    return (
      <div className="container-fluid py-5">
        <div className="container py-5 text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i
                className="bi bi-exclamation-triangle display-1 text-primary wow fadeInUp"
                data-wow-delay="0.1s"
              ></i>
              <h1 className="display-1 wow fadeInUp" data-wow-delay="0.2s">
                404
              </h1>
              <h3
                className="mb-4 text-uppercase wow fadeInUp"
                data-wow-delay="0.3s"
              >
                Page Not Found
              </h3>
              <p className="mb-4 wow fadeInUp" data-wow-delay="0.4s">
                We’re sorry, the page you have looked for does not exist in our
                website! Maybe go to our home page or try to use a search?
              </p>
              <a
                className="btn btn-outline-primary border-2 py-3 px-5 wow fadeInUp"
                data-wow-delay="0.5s"
                href="/"
              >
                Go Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  