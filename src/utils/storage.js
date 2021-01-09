// Store theme data to the LocalStorage of the Browser
export const writeToLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
}

// Receive theme data from the LocaStorage of the Browser
export const readFromLocalStorage = key => {
  const value = window.localStorage.getItem(key);

  if (value) {
    return JSON.parse(value);
  }
}