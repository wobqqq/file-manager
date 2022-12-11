import {rm as remove} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";

const rm = async args => {
  const filePath = getPath(args.shift());

  await remove(filePath);
};

export default rm;
