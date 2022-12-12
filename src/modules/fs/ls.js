import {readdir} from 'fs/promises';
import {getPath} from "../../helpers/fileSystemHelper.js";
import {printOperationFailedMessage} from "../../helpers/messageHelper.js";

const fileHandler = (item) => {
  return {
    name: item.name,
    type: item.isFile() ? 'file' : 'directory',
  };
}

const sortHandler = (itemA, itemB) => {
  return itemA.type > itemB.type ? 1 : -1;
}

const ls = async ([inputDirPath]) => {
  const dirPath = getPath(inputDirPath);

  try {
    const contentsList = await readdir(dirPath, {withFileTypes: true});
    const result = contentsList
      .map(item => fileHandler(item))
      .sort((itemA, itemB) => sortHandler(itemA, itemB));

    console.table(result);
  } catch (e) {
    printOperationFailedMessage();
  }
};

export default ls;
