
import React from "react";

import "./App.css";
import Content from "./containers/Content";
import Header from "./containers/Header";
import DeviceYonetim from "./DeviceYonetim/DeviceYonetim"; // Cihaz yönetimi sayfası
import SnmpDashboard from "./SnmpDashboard/SnmpDashboard"; // SNMP sorgularının yapılacağı ana sayfa
import SnmpSorgu from "./SnmpDashboard/SnmpSorgu";

function App() {
  let page;
  const path = window.location.pathname;

  // URL'ye göre doğru sayfayı seç
  if (path === '/device-yonetim') {
    page = <DeviceYonetim />;
  } else if (path === '/snmp-dashboard') {
    page = <SnmpDashboard />;
  } 
  else if (path === '/snmp-sorgu'){
    page = <SnmpSorgu />;
  }else {
    // Default olarak SNMP Dashboard açılır
    page = <SnmpDashboard />;
  }

  return (
    <div style={{ height: "100%" }}>
      <>
        <Header id="header" />
        <Content id="content">{page}</Content>
      </>
    </div>
  );
}

export default App;