import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const up = async () => {
  try {
    process.chdir('..');
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default up;
