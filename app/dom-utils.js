export const createElement = (tagName, props = {}) => {
  const el = document.createElement(tagName);
  Object.keys(props).forEach((key) => {
    el[key] = props[key];
  });
  return el;
};

export const compile = (template, vars = {}) => {
  return Object.keys(vars).reduce((acc, key) => {
    return acc.replace(`{${key}}`, vars[key]);
  }, template);
} 