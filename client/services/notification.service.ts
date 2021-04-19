import { notification } from 'antd';

export const error = (message, description?) =>
  notification.error({
    message,
    description,
    duration: 5,
  });

export const success = (message, description?) =>
  notification.success({
    message,
    description,
    duration: 3,
  });
