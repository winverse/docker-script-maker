import inquirer from 'inquirer';
import Fs from './lib/fs.js';
import Script from './lib/script.js';

class Maker {
  public async question() {
    try {
      const prompt = inquirer.createPromptModule();
      const { containerName } = await prompt({
        type: 'input',
        name: 'containerName',
        message: 'What is the docker container name?',
      });

      const script = new Script(containerName);

      const iter = [
        {
          filename: 'build',
          text: script.build(),
        },
        {
          filename: 'run',
          text: script.run(),
        },
        {
          filename: 'exec',
          text: script.exec(),
        },
        {
          filename: 'rm',
          text: script.rm(),
        },
      ];

      const fs = new Fs();
      for (const { filename, text } of iter) {
        await fs.writeShellScript(filename, text);
      }
    } catch (error) {
      console.error(error);
    }
  }
}

const maker = new Maker();
maker.question();
