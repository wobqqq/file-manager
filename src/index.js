import {homedir} from 'os';
import {createInterface} from "readline";
import {
  printCurrentDirectoryMessage,
  printGoodbyeMessage,
  printInvalidInputMessage,
  printWelcomeMessage
} from "./helpers/messageHelper.js";
import {args} from './helpers/argumentHelper.js';
import {handler} from './handlers/commandLineHandler.js';

const {username} = args();

const commandLineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const start = () => {
  if (username === undefined) {
    printInvalidInputMessage();

    return;
  }

  process.chdir(homedir());
  commandLineInterface
    .on('line', async line => await handler(line, commandLineInterface))
    .on('SIGINT', () => commandLineInterface.close())
    .on('close', () => printGoodbyeMessage(username));

  printWelcomeMessage(username);
  printCurrentDirectoryMessage();
};

start();
