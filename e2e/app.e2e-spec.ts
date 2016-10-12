import { DgAdminPage } from './app.po';

describe('ng-admin App', function() {
  let page: DgAdminPage;

  beforeEach(() => {
    page = new DgAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
