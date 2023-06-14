import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Colimn1 */}
          <div className="col1">
            <h4>Contributors</h4>
            <ul className="list-unstyled">
              <li>Marni Luka</li>
              <li> Josh Claxton</li>
              <li>Sal Monzoor</li>
              <li>Kevin Khamphounvong</li>
              <li>Alex </li>
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
