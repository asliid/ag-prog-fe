import axiosInstance from '../core/axiosInstance';

// IP adresi ve OID ile SNMP verisi getir
export const getSnmpData = (ipAddress, oid) => {
  return axiosInstance.get(`/api/snmp`, {
    params: { ipAddress, oid }, // Sorgu parametreleri
  });
};


// IP adresine göre SNMP verisi getir
export const getSnmpDataByIp = (ipAddress) => {
  return axiosInstance.get(`/api/snmp/ip/${ipAddress}`);
};

// Tüm SNMP verilerini al
export const getAllSnmpData = () => {
  return axiosInstance.get("/api/snmp/all");
};

// OID açıklamasını al
export const getOidDescription = (oid) => {
  return axiosInstance.get(`/api/snmp/oid-description`, {
    params: { oid: oid }
  });
};

// SNMP verilerini zaman serisi ile almak
export const getTimeSeriesData = (ipAddress, oid, startTime, endTime) => {
  return axiosInstance.get(`/api/snmp/timeseries`, {
    params: {
      ipAddress: ipAddress,
      oid: oid,
      startTime: startTime,
      endTime: endTime,
    }
  });
};

// Yeni SNMP verisi ekle (cihazla ilişkilendirerek)
export const addSnmpDataToDevice = (deviceId, snmpData) => {
  return axiosInstance.post(`/api/snmp/device/${deviceId}`, snmpData);
};

// Tüm OID açıklamalarını getir
export const getAllOidDescriptions = () => {
  return axiosInstance.get(`/api/oids`);
};