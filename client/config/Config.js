class Config {
  constructor() {
    this.platform = process.platform;
    this.isWin = this.platform === 'win32';
    this.isMac = this.platform === 'darwin';
    this.isLinux = this.platform === 'linux';
  }
}

module.exports = {
  config: new Config()
};