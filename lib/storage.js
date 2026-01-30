// Local storage utilities for admin data persistence

export const STORAGE_KEYS = {
  CITIES: 'admin-cities',
  SERVICES: 'admin-services',
  BLOG_POSTS: 'admin-blog-posts',
  LEADS: 'admin-leads',
  PROJECTS: 'admin-projects',
  SETTINGS: 'admin-settings'
};

export const storage = {
  // Get data from localStorage
  get: (key, defaultValue = []) => {
    if (typeof window === 'undefined') return defaultValue;
    
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading from localStorage key "${key}":`, error);
      return defaultValue;
    }
  },

  // Set data to localStorage
  set: (key, value) => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error writing to localStorage key "${key}":`, error);
    }
  },

  // Remove data from localStorage
  remove: (key) => {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  },

  // Clear all admin data
  clearAll: () => {
    if (typeof window === 'undefined') return;
    
    Object.values(STORAGE_KEYS).forEach(key => {
      storage.remove(key);
    });
  }
};

// Hook for using localStorage with React state
export const useLocalStorage = (key, defaultValue = []) => {
  const [value, setValue] = React.useState(() => storage.get(key, defaultValue));

  const setStoredValue = (newValue) => {
    setValue(newValue);
    storage.set(key, newValue);
  };

  return [value, setStoredValue];
};