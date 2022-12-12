import {getPath} from "../../helpers/fileSystemHelper.js";
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const cd = async ([inputDirPath]) => {
  const dirPath = getPath(inputDirPath);

  try {
    process.chdir(dirPath);
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default cd;
