const checkByArguments = (command, args) => {
  if (command.available_arguments.length === 0) {
    return true;
  }

  for (let i = 0; i < command.range_of_arguments; i++) {
    const argumentName = args[i];
    const isNotFound = !command.available_arguments.includes(argumentName);
    if (isNotFound) {
      return false;
    }
  }

  return true;
};

const checkByRangeOfArguments = ({min, max}, length) => {
  return length >= min && length <= max;
};

const validate = (command, args) => {
  if (command === undefined) {
    return false;
  }

  const isValidByArguments = checkByArguments(command, args);
  const isValidByRangeOfArguments = checkByRangeOfArguments(
    command.range_of_arguments,
    args.length
  );

  return isValidByArguments && isValidByRangeOfArguments;
};

export default validate;
