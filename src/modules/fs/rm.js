import {rm as remove} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const rm = async ([inputFilePath]) => {
  const filePath = getPath(inputFilePath);

  try {
    await remove(filePath);
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default rm;
