import {cpus, EOL, userInfo} from 'os'
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const EOL_ARGUMENT = '--EOL';
const CPUS_ARGUMENT = '--cpus';
const HOMEDIR_ARGUMENT = '--homedir';
const USERNAME_ARGUMENT = '--username';
const ARCHITECTURE_ARGUMENT = '--architecture';

const cpuHandler = (item) => {
  item.speed = `${(item.speed / 1000)} GHz`;

  return item;
}

const getData = () => {
  const {username, homedir} = userInfo();
  const data = {};

  data[EOL_ARGUMENT] = JSON.stringify(EOL);
  data[CPUS_ARGUMENT] = cpus().map(item => cpuHandler(item));
  data[HOMEDIR_ARGUMENT] = homedir;
  data[USERNAME_ARGUMENT] = username;
  data[ARCHITECTURE_ARGUMENT] = process.arch;

  return data;
}

const os = async ([argumentName]) => {
  try {
    const data = getData();
    const result = data[argumentName];

    console.table(result);
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default os;

export const AVAILABLE_ARGUMENTS = [
  EOL_ARGUMENT,
  CPUS_ARGUMENT,
  HOMEDIR_ARGUMENT,
  USERNAME_ARGUMENT,
  ARCHITECTURE_ARGUMENT,
];
