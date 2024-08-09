import CryptoJS from 'crypto-js';

const secretKey = process.env.REACT_APP_SECRET_KEY || 'default_secret_key';

export const storeUsername = (username: string) => {
  const encryptedUsername = CryptoJS.AES.encrypt(username, secretKey).toString();
  localStorage.setItem('encryptedUsername', encryptedUsername);
};

export const retrieveUsername = () => {
  const encryptedUsername = localStorage.getItem('encryptedUsername');
  if (encryptedUsername) {
    const bytes = CryptoJS.AES.decrypt(encryptedUsername, secretKey);
    const originalUsername = bytes.toString(CryptoJS.enc.Utf8);
    return originalUsername;
  }
  return null;
};
