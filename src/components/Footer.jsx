// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="text-center bg-body-tertiary">
      <div className="container pt-4" id='footerContainer'>
        <section className="mb-4">
          <Link
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            to="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            to="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            to="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faGoogle} />
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            to="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            to="https://www.linkedin.com/in/abdullah-azhar23/"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn btn-link btn-floating btn-lg text-body m-1"
            to="https://github.com/abdullah2302"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2020 Copyright:
        <Link className="text-body" to="https://cryptocurrency-45880.web.app/">Website</Link>
      </div>
    </footer>
  );
};

export default Footer;
