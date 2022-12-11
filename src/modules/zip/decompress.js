import {pipeline} from "stream/promises";
import {createBrotliDecompress} from "zlib";
import {createReadStream, createWriteStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";
import {parse, join} from 'path';

const decompress = async (args) => {
  const archivePath = getPath(args.shift());
  const destinationPath = getPath(args.shift());
  const {name} = parse(archivePath);
  const filePath = join(destinationPath, name);

  await pipeline(
    createReadStream(archivePath),
    createBrotliDecompress(),
    createWriteStream(filePath)
  );
};

export default decompress;
