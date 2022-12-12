import {pipeline} from "stream/promises";
import {createReadStream, createWriteStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";
import {join, parse} from "path";
import {rm as remove} from 'fs/promises';

const mv = async ([inputOldFilePath, inputDestinationPath]) => {
  const oldFilePath = getPath(inputOldFilePath);
  const destinationPath = getPath(inputDestinationPath);
  const {base} = parse(oldFilePath);
  const newFilePath = join(destinationPath, base);

  await pipeline(
    createReadStream(oldFilePath),
    createWriteStream(newFilePath)
  );
  await remove(oldFilePath);
};

export default mv;
