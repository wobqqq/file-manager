import {readFile} from 'fs/promises';
import {createHash} from 'crypto';
import {getPath} from "../../helpers/fileSystemHelper.js";
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const hash = async ([inputFilePath]) => {
  const filePath = getPath(inputFilePath);

  try {
    const content = await readFile(filePath);
    const hash = createHash('sha256')
      .update(content)
      .digest('hex');

    console.log(hash);
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default hash;
