import axiosInstance from '../core/axiosInstance';

// Tüm cihazları getir
export const getAllDevices = () => {
  return axiosInstance.get("/api/devices");
};

// IP adresine göre cihaz getir
export const getDeviceByIp = (ipAddress) => {
  return axiosInstance.get(`/api/devices/${ipAddress}`);
};

// Yeni cihaz oluştur
export const createDevice = (deviceData) => {
  return axiosInstance.post("/api/devices", deviceData);
};

// Mevcut cihazı güncelle
export const updateDevice = (id, deviceDetails) => {
  return axiosInstance.put(`/api/devices/${id}`, deviceDetails);
};

// Cihazı sil
export const deleteDevice = (id) => {
  return axiosInstance.delete(`/api/devices/${id}`)};