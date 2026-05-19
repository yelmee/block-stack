let count = 0;

export const renderCounter = {
  increment: () => count++,
  reset: () => { count = 0; },
  get: () => count,
};
