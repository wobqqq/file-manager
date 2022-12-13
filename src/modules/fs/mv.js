import {pipeline} from "stream/promises";
import {createReadStream, createWriteStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";
import {join, parse} from "path";
import {rm as remove} from 'fs/promises';
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const mv = async ([inputOldFilePath, inputDestinationPath]) => {
  const oldFilePath = getPath(inputOldFilePath);
  const destinationPath = getPath(inputDestinationPath);
  const {base} = parse(oldFilePath);
  const newFilePath = join(destinationPath, base);

  try {
    await pipeline(
      createReadStream(oldFilePath),
      createWriteStream(newFilePath)
    );
    await remove(oldFilePath);
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default mv;
