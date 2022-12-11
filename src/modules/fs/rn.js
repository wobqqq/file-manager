import {rename as renameFile} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";

const rn = async args => {
  const oldFilePath = getPath(args.shift());
  const newFilePath = getPath(args.shift());

  await renameFile(oldFilePath, newFilePath);
};

export default rn;
