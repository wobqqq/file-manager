import {rm as remove} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";

const rm = async ([inputFilePath]) => {
  const filePath = getPath(inputFilePath);

  await remove(filePath);
};

export default rm;
