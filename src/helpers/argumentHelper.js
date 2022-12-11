const argumentHandler = (item) => {
  const isNotValidArgumentName = !item.startsWith('--');

  if (isNotValidArgumentName) {
    return null;
  }

  const argument = item
    .replace('--', '')
    .split('=');
  const key = argument.shift();
  const value = argument.shift();

  if (value) {
    return [key, value];
  }

  return null;
};

export const args = () => {
  const args = process
    .argv
    .slice(2)
    .map(item => argumentHandler(item))
    .filter(item => item);

  return Object.fromEntries(args);
};
