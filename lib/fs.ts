import fs from 'fs';
import path from 'path';

class Fs {
  private scriptsFolderPath: string;
  constructor() {
    this.scriptsFolderPath = path.resolve(process.cwd(), './scripts');
  }
  public async writeShellScript(filename: string, text: string) {
    try {
      const filepath = `${this.scriptsFolderPath}/${filename}.sh`;
      await fs.writeFileSync(`${filepath}`, text, { encoding: 'utf8' });
    } catch (error) {
      console.error(error);
    }
  }
}

export default Fs;
