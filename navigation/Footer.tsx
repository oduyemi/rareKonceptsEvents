import Image from "next/image";

export const Footer = () => {
  return (
    <div
      className="container-fluid bg-dark text-light footer py-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <div className="logo-container">
          <Image
            src="/images/logo/logo.png"
            alt="site logo"
            width={72}
            height={72}
            priority
            className="logo-img"
          />
        </div>

        <div className="d-flex justify-content-center mb-4">
          <a
            className="btn btn-lg-square btn-outline-primary border-2 m-1"
            href="#!"
          >
            <i className="fab fa-x-twitter"></i>
          </a>
          <a
            className="btn btn-lg-square btn-outline-primary border-2 m-1"
            href="#!"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="btn btn-lg-square btn-outline-primary border-2 m-1"
            href="#!"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            className="btn btn-lg-square btn-outline-primary border-2 m-1"
            href="#!"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <p>
          &copy; <a className="border-bottom" href="#">Your Site Name</a>, All
          Right Reserved.
        </p>
      </div>
    </div>
  );
}
