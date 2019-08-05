/** antd */
import { message } from 'antd';

export const showSuccess = (msg = 'Success!', time = 3) =>
  message.success(msg, time);

export const showWarning = (msg = 'Warning!', time = 3) =>
  message.warning(msg, time);

export const showError = (msg = 'Error!', time = 3) =>
  message.error(msg, time);
