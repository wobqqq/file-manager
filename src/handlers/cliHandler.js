import {EOL} from "os";
import validate from "../validators/commandLineValidator.js";
import {printCurrentDirectoryMessage, printInvalidInputMessage} from "../helpers/messageHelper.js";
import * as commands from "../modules/index.js";
import getCommand from "../helpers/commandHelper.js";

const parseCommandLine = (commandLine) => {
  return commandLine
    .toString()
    .trim()
    .replace(EOL, '')
    .replace(/ +/g, ' ')
    .split(' ');
};

export const handler = async (line) => {
  const inputData = parseCommandLine(line);
  const inputCommandName = inputData.shift();
  const command = getCommand(inputCommandName);
  const isNotValidInputData = !validate(command, inputData);

  if (isNotValidInputData) {
    printInvalidInputMessage();

    return;
  }

  await commands[command.name](inputData);
  printCurrentDirectoryMessage();
};
