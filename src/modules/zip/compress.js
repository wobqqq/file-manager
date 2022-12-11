import {pipeline} from "stream/promises";
import {createBrotliCompress} from "zlib";
import {createReadStream, createWriteStream} from "fs";
import {getPath} from "../../helpers/fileSystemHelper.js";
import {parse, join} from 'path';

const compress = async (args) => {
  const filePath = getPath(args.shift());
  const destinationPath = getPath(args.shift());
  const {base} = parse(filePath);
  const archivePath = join(destinationPath, `${base}.br`);

  await pipeline(
    createReadStream(filePath),
    createBrotliCompress(),
    createWriteStream(archivePath)
  );
};

export default compress;
