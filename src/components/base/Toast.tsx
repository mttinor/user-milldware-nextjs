import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast: React.FC = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

export const showToast = (message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info') => {
  switch (type) {
    case 'info':
      toast.info(message);
      break;
    case 'success':
      toast.success(message);
      break;
    case 'warning':
      toast.warning(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
      break;
  }
};

export default Toast;
