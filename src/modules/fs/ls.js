import {readdir} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";

const ls = async args => {
  const dirPath = getPath(args.shift());
  const contentsList = await readdir(dirPath);

  console.table(contentsList);
};

export default ls;
