import React, { useState } from 'react';
import { getSnmpDataByIp } from '../Services/snmpService';

const SnmpDashboard = () => {
  const [snmpData, setSnmpData] = useState([]);
  const [ipAddress, setIpAddress] = useState('');
  const [error, setError] = useState('');

  // IP adresine göre veri çekmek
  const handleFetchByIp = async () => {
    if (ipAddress) {
      try {
        const response = await getSnmpDataByIp(ipAddress); // IP adresine göre veriyi alıyoruz
        setSnmpData(response.data);
      } catch (err) {
        setError('SNMP verileri alınamadı');
      }
    } else {
      setError('Lütfen geçerli bir IP adresi girin.');
    }
  };

  return (
    <div>
      <h1>SNMP Listesi</h1>

      <div>
        <input
          type="text"
          placeholder="IP Adresi"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button onClick={handleFetchByIp}>IP Adresine Göre Getir</button>
      </div>

      <div>
        {error && <p>{error}</p>}
        <ul>
          {snmpData.length > 0 ? (
            snmpData.map((data, index) => (
              <li key={index}>
                <p>IP: {data.ipAddress}</p>
                <p>OID: {data.oid}</p>
                <p>Değer: {data.value}</p>
                <p>Zaman Damgası: {new Date(data.timestamp).toLocaleString()}</p>
              </li>
            ))
          ) : (
            <p>Veri bulunamadı.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SnmpDashboard;