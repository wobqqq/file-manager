export const printInvalidInputMessage = () => {
  console.error('Invalid input');
};

export const printOperationFailedMessage = () => {
  console.error('Operation failed');
};

export const printWelcomeMessage = (username) => {
  console.log(`Welcome to the File Manager, ${username}!`);
};

export const printGoodbyeMessage = (username) => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
};

export const printCurrentDirectoryMessage = () => {
  console.log(`You are currently in ${process.cwd()}`);
};
