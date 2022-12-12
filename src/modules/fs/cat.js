import {pipeline} from "stream/promises";
import {Writable} from 'stream'
import {createReadStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const stdout = () => {
  const options = {
    write(chunk) {
      const result = chunk.toString();
      console.log(result);
    },
  }

  return new Writable(options);
}

const cat = async ([inputFilePath]) => {
  const filePath = getPath(inputFilePath);

  try {
    await pipeline(
      createReadStream(filePath),
      stdout(),
    );
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default cat;
