import {getPath} from "../../helpers/fileSystemHelper.js";

const cd = async ([inputDirPath]) => {
  const dirPath = getPath(inputDirPath);

  process.chdir(dirPath);
};

export default cd;
