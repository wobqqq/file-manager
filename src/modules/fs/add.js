import {writeFile} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const add = async ([inputFilePath]) => {
  const filePath = getPath(inputFilePath);

  try {
    await writeFile(filePath, '');
  } catch (e) {
    printOperationFailedMessage();
  }

};

export default add;
