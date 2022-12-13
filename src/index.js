import {homedir} from 'os';
import {createInterface} from "readline";
import {
  printCurrentDirectoryMessage,
  printGoodbyeMessage,
  printInvalidInputMessage,
  printWelcomeMessage
} from "./helpers/messageHelper.js";
import {args} from './helpers/argumentHelper.js';
import {handler} from './handlers/cliHandler.js';

const {username} = args();

const commandLineInterface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const start = () => {
  if (username === undefined) {
    printInvalidInputMessage();
    process.exit();

    return;
  }

  commandLineInterface
    .on('line', async line => await handler(line))
    .on('SIGINT', () => commandLineInterface.close())
    .on('close', () => printGoodbyeMessage(username));

  process.chdir(homedir());
  process.on('exit', () => commandLineInterface.close());

  printWelcomeMessage(username);
  printCurrentDirectoryMessage();
};

start();
