export const printInvalidInputMessage = () => {
  console.error('Invalid input');
};

export const printOperationFailedMessage = () => {
  console.error('Operation failed');
};

export const printWelcomeMessage = (userName) => {
  console.log(`Welcome to the File Manager, ${userName}!`);
};

export const printGoodbyeMessage = (userName) => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
};

export const printCurrentDirectoryMessage = () => {
  console.log(`You are currently in ${process.cwd()}`);
};
