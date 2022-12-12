import {readdir} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";

const ls = async ([inputDirPath]) => {
  const dirPath = getPath(inputDirPath);
  const contentsList = await readdir(dirPath);

  console.table(contentsList);
};

export default ls;
