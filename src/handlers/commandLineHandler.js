import {EOL} from "os";
import validate from "../validators/commandLineValidator.js";
import {printCurrentDirectoryMessage, printInvalidInputMessage} from "../helpers/messageHelper.js";
import * as commands from "../modules/index.js";

const EXIT_COMMAND_NAME = '.exit';

const parseCommandLine = (commandLine) => {
  return commandLine
    .toString()
    .trim()
    .replace(EOL, '')
    .replace(/ +/g, ' ')
    .split(' ');
};

export const handler = async (line, commandLineInterface) => {
  const inputData = parseCommandLine(line);
  const commandName = inputData.shift();
  const isNotValidInputData = !validate(commandName, inputData);

  if (isNotValidInputData) {
    printInvalidInputMessage();

    return;
  }

  if (commandName === EXIT_COMMAND_NAME) {
    commandLineInterface.close();

    return;
  }

  await commands[commandName](inputData);
  printCurrentDirectoryMessage();
};
