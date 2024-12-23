import React, { useState, useEffect } from 'react';
import { getAllOidDescriptions, getSnmpData } from '../Services/snmpService';

const SnmpSorgu = () => {
    const [ipAddress, setIpAddress] = useState('');
    const [oid, setOid] = useState('');
    const [oidDescriptions, setOidDescriptions] = useState([]);
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
  
    useEffect(() => {
      // OID açıklamalarını al
      const fetchOidDescriptions = async () => {
        try {
          const response = await getAllOidDescriptions();
          console.log(response);  // API yanıtını kontrol et
          setOidDescriptions(response.data);  // Yanıtı state'e kaydet
        } catch (err) {
          setError('OID açıklamaları alınamadı.');
          console.error(err);  // Hata mesajını kontrol et
        }
      };
  
      fetchOidDescriptions();
    }, []);
  
    const handleQuery = async () => {
      try {
        const response = await getSnmpData(ipAddress, oid);  // Backend'e SNMP sorgusu gönder
        const data = response.data;
  
        // Veriyi JSON olarak değil, normal şekilde yazdırmak için
        setResult(`
          IP Adresi: ${data.ipAddress}
          OID: ${data.oid}
          Sonuç: ${data.result}
        `);  // Sonuçları formatlı olarak yazdır
      } catch (err) {
        setError('SNMP verileri alınamadı');
      }
    };
  
    return (
      <div>
        <h1>SNMP Sorgu</h1>
        
        <div>
          <input
            type="text"
            placeholder="IP Adresi"
            value={ipAddress}
            onChange={(e) => setIpAddress(e.target.value)}
          />
        </div>
        
        <div>
        <select
          value={oid}
          onChange={(e) => setOid(e.target.value)}  // OID numarasını seçiyoruz
        >
          <option value="">OID Seçiniz</option>
          {oidDescriptions.map((oidDescription, index) => (
            <option key={index} value={oidDescription.oid}>
              {oidDescription.oid} - {oidDescription.description}  {/* OID ve açıklamasını gösteriyoruz */}
            </option>
          ))}
        </select>
      </div>
        
        <div>
          <button onClick={handleQuery}>Sorgu Yap</button>
        </div>
  
        <div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          
          {result && (
            <pre style={{ backgroundColor: '#f4f4f4', padding: '10px' }}>
              {result}
            </pre>
          )}
        </div>
      </div>
    );
  };
export default SnmpSorgu;