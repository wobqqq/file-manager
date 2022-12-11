import {writeFile} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";

const add = async args => {
  const filePath = getPath(args.shift());

  await writeFile(filePath, '');
};

export default add;
