import {pipeline} from "stream/promises";
import {createReadStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const cat = async ([inputFilePath]) => {
  const filePath = getPath(inputFilePath);

  try {
    await pipeline(
      createReadStream(filePath),
      process.stdin
    );
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default cat;
