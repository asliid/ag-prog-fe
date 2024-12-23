import React, { useState, useEffect } from "react";
import { getAllDevices } from "../Services/deviceService"; // Service fonksiyonları

const DeviceYonetim = () => {
  const [devices, setDevices] = useState([]); // Cihazlar
  const [sortBy, setSortBy] = useState("name"); // Sıralama kriteri
  const [sortDirection, setSortDirection] = useState("asc"); // Sıralama yönü

  // Cihazları sıralamak için yardımcı fonksiyon
  const sortDevices = (list, sortBy, sortDirection) => {
    return list.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });
  };

  useEffect(() => {
    // API'den cihazları getir ve sıralama uygula
    getAllDevices()
      .then((response) => {
        const sortedDevices = sortDevices(response.data, sortBy, sortDirection);
        setDevices(sortedDevices);
      })
      .catch((error) => {
        console.error("Cihazlar alınırken bir hata oluştu:", error);
      });
  }, [sortBy, sortDirection]); // sortBy veya sortDirection değiştiğinde tetiklenir

  return (
    <div>
      <h1>Cihaz Yönetimi</h1>
      <div>
        <label>Sıralama Kriteri: </label>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="name">İsim</option>
          <option value="ipAddress">IP Adresi</option>
        </select>

        <label>Sıralama Yönü: </label>
        <select onChange={(e) => setSortDirection(e.target.value)} value={sortDirection}>
          <option value="asc">Artan</option>
          <option value="desc">Azalan</option>
        </select>
      </div>

      {/* Cihazlar Listesi */}
      <ul>
        {devices.map((device) => (
          <li key={device.id}>
            {device.name} - {device.ipAddress}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceYonetim;