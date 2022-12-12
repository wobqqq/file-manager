import {writeFile} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";

const add = async ([inputFilePath]) => {
  const filePath = getPath(inputFilePath);

  await writeFile(filePath, '');
};

export default add;
