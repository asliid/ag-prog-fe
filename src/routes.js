import SnmpDashboard from "./SnmpDashboard/SnmpDashboard";
import DeviceYonetim from "./DeviceYonetim/DeviceYonetim";
import SnmpSorgu from "./SnmpDashboard/SnmpSorgu";

const routes = [
  { path: "/", exact: true, name: "Ana Sayfa", component: SnmpDashboard },
  { path: "/device-yonetim", name: "Cihaz Yönetimi", component: DeviceYonetim },
  { path: "/snmp-dashboard", name: "SNMP Dashboard", component: SnmpDashboard },
  { path: "/snmp-sorgu", name: "SNMP Sorgu", component: SnmpSorgu },

];

export default routes;