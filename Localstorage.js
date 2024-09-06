// utils/localStorage.js

export const manageLocalStorage = (action, key, value) => {
  try {
    switch (action) {
      case 'set':
        localStorage.setItem(key, JSON.stringify(value));
        break;

      case 'get':
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;

      case 'update':
        const existingItem = localStorage.getItem(key);
        if (existingItem) {
          const updatedItem = { ...JSON.parse(existingItem), ...value };
          localStorage.setItem(key, JSON.stringify(updatedItem));
        }
        break;

      case 'remove':
        localStorage.removeItem(key);
        break;

      default:
        throw new Error('Invalid action type. Use "set", "get", "update", or "remove".');
    }
  } catch (error) {
    console.error('LocalStorage error:', error);
  }
};
