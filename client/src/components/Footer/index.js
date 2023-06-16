import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div className="main-footer absolute inset-x-0 bottom-0 text-stone-200 ">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col1">
            <h4>Contributors:</h4>
            <ul className="Linkst-unstyled">
              <Link>|| Marni Luka ||</Link>
              <Link> Josh Claxton ||</Link>
              <Link> Sal Monzoor ||</Link>
              <Link> Kevin Khamphounvong ||</Link>
              <Link> Alex Seidensticker ||</Link>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-small">
            &copy;{new Date().getFullYear()} Bitter Incoprporated | All Rights
            Reserved To Bitter | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;