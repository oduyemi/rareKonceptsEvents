export const AboutHero = () => {
    return (
      <div className="page-header pb-5 abt">
        <div className="container text-center py-5">
          <h1 className="display-4 text-uppercase mb-3 animated slideInDown">
            About
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
              <li className="breadcrumb-item">
                <a className="text-light" href="/" style={{ textDecoration: "none"}}>
                  Home
                </a>
              </li>
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
    );
  }
  