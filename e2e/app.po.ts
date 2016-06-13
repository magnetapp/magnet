export class MagnetPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('magnet-app h1')).getText();
  }
}
