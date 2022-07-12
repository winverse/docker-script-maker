class Script {
  private containerName: string;
  private imageName: string;
  constructor(containerName: string) {
    this.containerName = containerName;
    this.imageName = `${containerName}-image`;
  }
  private firstLine() {
    return `#!/bin/sh\n\n`;
  }
  public build() {
    return `${this.firstLine()}docker build -t ${this.containerName}-image ./`;
  }
  public run() {
    return `${this.firstLine()}docker run -d -it -p 5001:5001 --name ${
      this.containerName
    } ${this.imageName}`;
  }
  public exec() {
    return `${this.firstLine()}docker run exec -it ${
      this.containerName
    } /bin/sh`;
  }
  public rm() {
    return `${this.firstLine()}docker stop ${this.containerName}\ndocker rm ${
      this.containerName
    }\ndocker rmi ${this.imageName}`;
  }
}

export default Script;
