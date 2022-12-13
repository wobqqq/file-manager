import {rename as renameFile} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";
import {join, parse} from "path";

const rn = async ([inputOldFilePath, inputNewFileName]) => {
  const oldFilePath = getPath(inputOldFilePath);
  const {dir} = parse(oldFilePath);
  const newFilePath = join(dir, inputNewFileName);

  try {
    await renameFile(oldFilePath, newFilePath);
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default rn;
