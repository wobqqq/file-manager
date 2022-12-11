import {pipeline} from "stream/promises";
import {createReadStream, createWriteStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";
import {join, parse} from "path";

const cp = async args => {
  const oldFilePath = getPath(args.shift());
  const destinationPath = getPath(args.shift());
  const {base} = parse(oldFilePath);
  const newFilePath = join(destinationPath, base);

  await pipeline(
    createReadStream(oldFilePath),
    createWriteStream(newFilePath)
  );
};

export default cp;
