import {readdir} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const ls = async ([inputDirPath]) => {
  const dirPath = getPath(inputDirPath);

  try {
    const contentsList = await readdir(dirPath);
    console.table(contentsList);
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default ls;
