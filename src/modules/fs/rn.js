import {rename as renameFile} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const rn = async ([inputOldFilePath, inputNewFilePath]) => {
  const oldFilePath = getPath(inputOldFilePath);
  const newFilePath = getPath(inputNewFilePath);

  try {
    await renameFile(oldFilePath, newFilePath);
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default rn;
