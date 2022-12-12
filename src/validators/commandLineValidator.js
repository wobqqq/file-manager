import {AVAILABLE_ARGUMENTS as OS_AVAILABLE_ARGUMENTS} from './../modules/os/os.js'

const rules = {
  'add': {
    'number_of_arguments': 1,
    'available_arguments': [],
  },
  'cat': {
    'number_of_arguments': 1,
    'available_arguments': [],
  },
  'cd': {
    'number_of_arguments': 1,
    'available_arguments': [],
  },
  'cp': {
    'number_of_arguments': 2,
    'available_arguments': [],
  },
  'ls': {
    'number_of_arguments': 1,
    'available_arguments': [],
  },
  'mv': {
    'number_of_arguments': 2,
    'available_arguments': [],
  },
  'rm': {
    'number_of_arguments': 1,
    'available_arguments': [],
  },
  'rn': {
    'number_of_arguments': 2,
    'available_arguments': [],
  },
  'up': {
    'number_of_arguments': 0,
    'available_arguments': [],
  },
  '.exit': {
    'number_of_arguments': 0,
    'available_arguments': [],
  },
  'compress': {
    'number_of_arguments': 2,
    'available_arguments': [],
  },
  'decompress': {
    'number_of_arguments': 2,
    'available_arguments': [],
  },
  'hash': {
    'number_of_arguments': 1,
    'available_arguments': [],
  },
  'os': {
    'number_of_arguments': 1,
    'available_arguments': OS_AVAILABLE_ARGUMENTS,
  },
};

const checkArguments = (rule, args) => {
  if (rule.available_arguments.length === 0) {
    return true;
  }

  for (let i = 0; i < rule.number_of_arguments; i++) {
    const argumentName = args[i];
    const isNotFound = !rule.available_arguments.includes(argumentName);
    if (isNotFound) {
      return false;
    }
  }

  return true;
};

const validate = (commandName, args) => {
  const rule = rules[commandName];

  if (rule === undefined) {
    return false;
  }

  const isValidByNumberOfArguments = rule.number_of_arguments >= args.length;
  const isValidByArguments = checkArguments(rule, args);

  return isValidByNumberOfArguments && isValidByArguments;
};

export default validate;
