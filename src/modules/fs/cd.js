import {getPath} from "../../helpers/fileSystemHelper.js";

const cd = async args => {
  const dirPath = getPath(args.shift());

  process.chdir(dirPath);
};

export default cd;
