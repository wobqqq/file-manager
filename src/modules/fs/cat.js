import {pipeline} from "stream/promises";
import {createReadStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";

const cat = async ([inputFilePath]) => {
  const filePath = getPath(inputFilePath);

  await pipeline(
    createReadStream(filePath),
    process.stdin
  );
};

export default cat;
