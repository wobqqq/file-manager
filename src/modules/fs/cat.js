import {pipeline} from "stream/promises";
import {createReadStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";

const cat = async args => {
  const filePath = getPath(args.shift());

  await pipeline(
    createReadStream(filePath),
    process.stdin
  );
};

export default cat;
