import axios from 'axios';
import { RegisterHotelDto } from './dto/register-hotel.dto';
import { ErrorResponse } from './dto/error-response';

export const register = (
  data: RegisterHotelDto,
): Promise<ErrorResponse & { id: number }> => {
  return axios.post('/api/register', data).then((response) => response.data);
};
export const uploadHotelFiles = (
  hotelId: number,
  files: any[],
): Promise<ErrorResponse> => {
  const formData = new FormData();
  formData.append('files', files[0]);

  return axios
    .post(`/api/${hotelId}/crFiles`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response.data);
};
export const uploadCrFiles = (
  hotelId: number,
  files: any[],
): Promise<ErrorResponse> => {
  const formData = new FormData();
  formData.append('files', files[0]);

  return axios
    .post(`/api/${hotelId}/hotelsFiles`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((response) => response.data);
};
