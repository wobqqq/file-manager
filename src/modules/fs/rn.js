import {rename as renameFile} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";

const rn = async ([inputOldFilePath, inputNewFilePath]) => {
  const oldFilePath = getPath(inputOldFilePath);
  const newFilePath = getPath(inputNewFilePath);

  await renameFile(oldFilePath, newFilePath);
};

export default rn;
