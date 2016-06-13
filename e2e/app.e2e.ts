import { MagnetPage } from './app.po';

describe('magnet App', function() {
  let page: MagnetPage;

  beforeEach(() => {
    page = new MagnetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('magnet works!');
  });
});
