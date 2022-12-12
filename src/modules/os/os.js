import {cpus, EOL, userInfo} from 'os'

const EOL_ARGUMENT = '--EOL';
const CPUS_ARGUMENT = '--cpus';
const HOMEDIR_ARGUMENT = '--homedir';
const USERNAME_ARGUMENT = '--username';
const ARCHITECTURE_ARGUMENT = '--architecture';

const cpuHandler = (item) => {
  item.speed = `${(item.speed / 1000)} GHz`;

  return item;
}

const getResult = (argumentName) => {
  switch (argumentName) {
    case EOL_ARGUMENT:
      return JSON.stringify(EOL);
    case CPUS_ARGUMENT:
      return cpus().map(item => cpuHandler(item));
    case HOMEDIR_ARGUMENT:
      const {homedir} = userInfo();

      return homedir;
    case USERNAME_ARGUMENT:
      const {username} = userInfo();

      return username;
    case ARCHITECTURE_ARGUMENT:
      return process.arch;
    default:
      return 'Operation not found';
  }
}

const os = async args => {
  const argumentName = args.shift();
  const result = getResult(argumentName);

  console.table(result);
};

export default os;

export const AVAILABLE_ARGUMENTS = [
  EOL_ARGUMENT,
  CPUS_ARGUMENT,
  HOMEDIR_ARGUMENT,
  USERNAME_ARGUMENT,
  ARCHITECTURE_ARGUMENT,
];
