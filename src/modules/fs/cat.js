import {pipeline} from "stream/promises";
import {Writable} from 'stream'
import {createReadStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const stdout = () => {
  const options = {
    decodeStrings: false,
    write(chunk, _, callback) {
      console.log(chunk);
      callback();
    },
  }

  return new Writable(options);
}

const cat = async ([inputFilePath]) => {
  const filePath = getPath(inputFilePath);

  try {
    await pipeline(
      createReadStream(filePath, {encoding: 'UTF-8'}),
      stdout(),
    );
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default cat;
