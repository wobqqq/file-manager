import {pipeline} from "stream/promises";
import {createReadStream, createWriteStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";
import {join, parse} from "path";

const cp = async ([inputOldFilePath, inputDestinationPath]) => {
  const oldFilePath = getPath(inputOldFilePath);
  const destinationPath = getPath(inputDestinationPath);
  const {base} = parse(oldFilePath);
  const newFilePath = join(destinationPath, base);

  await pipeline(
    createReadStream(oldFilePath),
    createWriteStream(newFilePath)
  );
};

export default cp;
