import {AVAILABLE_ARGUMENTS as OS_AVAILABLE_ARGUMENTS} from './../modules/os/os.js'

const commands = {
  'add': {
    'name': 'add',
    'range_of_arguments': {
      'max': 1,
      'min': 1,
    },
    'available_arguments': [],
  },
  'cat': {
    'name': 'cat',
    'range_of_arguments': {
      'max': 1,
      'min': 1,
    },
    'available_arguments': [],
  },
  'cd': {
    'name': 'cd',
    'range_of_arguments': {
      'max': 1,
      'min': 1,
    },
    'available_arguments': [],
  },
  'cp': {
    'name': 'cp',
    'range_of_arguments': {
      'max': 2,
      'min': 2,
    },
    'available_arguments': [],
  },
  'ls': {
    'name': 'ls',
    'range_of_arguments': {
      'max': 1,
      'min': 0,
    },
    'available_arguments': [],
  },
  'mv': {
    'name': 'mv',
    'range_of_arguments': {
      'max': 2,
      'min': 2,
    },
    'available_arguments': [],
  },
  'rm': {
    'name': 'rm',
    'range_of_arguments': {
      'max': 1,
      'min': 1,
    },
    'available_arguments': [],
  },
  'rn': {
    'name': 'rn',
    'range_of_arguments': {
      'max': 2,
      'min': 2,
    },
    'available_arguments': [],
  },
  'up': {
    'name': 'up',
    'range_of_arguments': {
      'max': 0,
      'min': 0,
    },
    'available_arguments': [],
  },
  '.exit': {
    'name': 'exit',
    'range_of_arguments': {
      'max': 0,
      'min': 0,
    },
    'available_arguments': [],
  },
  'compress': {
    'name': 'compress',
    'range_of_arguments': {
      'max': 2,
      'min': 2,
    },
    'available_arguments': [],
  },
  'decompress': {
    'name': 'decompress',
    'range_of_arguments': {
      'max': 2,
      'min': 2,
    },
    'available_arguments': [],
  },
  'hash': {
    'name': 'hash',
    'range_of_arguments': {
      'max': 1,
      'min': 1,
    },
    'available_arguments': [],
  },
  'os': {
    'name': 'os',
    'range_of_arguments': {
      'max': 1,
      'min': 1,
    },
    'available_arguments': OS_AVAILABLE_ARGUMENTS,
  },
};

const getCommand = (commandName) => {
  return commands[commandName];
}

export default getCommand;
