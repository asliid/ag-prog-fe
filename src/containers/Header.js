import React from "react";
import "./container.css";

export default function Header(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-pills navbar-light bg-light justify-content-between ">
        <a className="navbar-brand" href="#">
          SNMP Ağ İzleme Uygulaması
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse header-item" id="navbarNavDropdown">
          <ul className="navbar-nav  ">
        
            <li className="nav-item">
              <a className="nav-link" href="/device-yonetim">
                Cihaz İşlemleri
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/snmp-dashboard">
                Snmp Sorgu Listesi
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/snmp-sorgu">
                Snmp Sorgu 
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}