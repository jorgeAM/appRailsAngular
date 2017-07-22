import { AppRailsAngularPage } from './app.po';

describe('app-rails-angular App', () => {
  let page: AppRailsAngularPage;

  beforeEach(() => {
    page = new AppRailsAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
