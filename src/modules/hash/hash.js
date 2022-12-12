import {readFile} from 'fs/promises';
import {createHash} from 'crypto';
import {getPath} from "../../helpers/fileSystemHelper.js";

const hash = async ([inputFilePath]) => {
  const filePath = getPath(inputFilePath);
  const content = await readFile(filePath);
  const hash = createHash('sha256')
    .update(content)
    .digest('hex');

  console.log(hash);
};

export default hash;
