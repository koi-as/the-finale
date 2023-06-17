import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./footer.css";

const Footer = () => {

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer")
  }

  return (
    <div className="main-footer absolute inset-x-0 bottom-0 text-stone-200 w-full">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col1 flex">
            <h4>Contributors:&nbsp;</h4>
            <ul className="Linkst-unstyled">
              <Link onClick={() => openInNewTab('https://github.com/MarniLuka')}>Marni Luka&nbsp;</Link>
              <Link onClick={() => openInNewTab('https://github.com/claxCode')}>Josh Claxton&nbsp;</Link>
              <Link onClick={() => openInNewTab('https://github.com/salzm')}>Sal Monzoor&nbsp;</Link>
              <Link onClick={() => openInNewTab('https://github.com/shimpfierie')}>Kevin Khamphounvong&nbsp;</Link>
              <Link onClick={() => openInNewTab('https://github.com/koi-as')}>Alex Seidensticker&nbsp;</Link>
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