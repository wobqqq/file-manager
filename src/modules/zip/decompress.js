import {pipeline} from "stream/promises";
import {createBrotliDecompress} from "zlib";
import {createReadStream, createWriteStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";
import {parse, join} from 'path';
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const decompress = async ([inputArchivePath, inputDestinationPath]) => {
  const archivePath = getPath(inputArchivePath);
  const destinationPath = getPath(inputDestinationPath);
  const {name} = parse(archivePath);
  const filePath = join(destinationPath, name);

  try {
    await pipeline(
      createReadStream(archivePath),
      createBrotliDecompress(),
      createWriteStream(filePath)
    );
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default decompress;
