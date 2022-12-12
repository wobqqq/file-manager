import {pipeline} from "stream/promises";
import {createReadStream, createWriteStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";
import {join, parse} from "path";
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const cp = async ([inputOldFilePath, inputDestinationPath]) => {
  const oldFilePath = getPath(inputOldFilePath);
  const destinationPath = getPath(inputDestinationPath);
  const {base} = parse(oldFilePath);
  const newFilePath = join(destinationPath, base);

  try {
    await pipeline(
      createReadStream(oldFilePath),
      createWriteStream(newFilePath)
    );
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default cp;
