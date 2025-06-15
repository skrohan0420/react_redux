// Save to localStorage
export const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem('cartState', serialized);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Load from localStorage
export const loadState = () => {
  try {
    const serialized = localStorage.getItem('cartState');
    if (!serialized) return undefined;
    return JSON.parse(serialized);
  } catch (err) {
    return undefined;
  }
};
