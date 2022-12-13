import {pipeline} from "stream/promises";
import {createBrotliCompress} from "zlib";
import {createReadStream, createWriteStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";
import {parse, join} from 'path';
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const compress = async ([inputFilePath, inputDestinationPath]) => {
  const filePath = getPath(inputFilePath);
  const destinationPath = getPath(inputDestinationPath);
  const {base} = parse(filePath);
  const archivePath = join(destinationPath, `${base}.br`);

  try {
    await pipeline(
      createReadStream(filePath),
      createBrotliCompress(),
      createWriteStream(archivePath)
    );
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default compress;
