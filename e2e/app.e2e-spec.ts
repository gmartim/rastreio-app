import { RastreioAppPage } from './app.po';

describe('rastreio-app App', () => {
  let page: RastreioAppPage;

  beforeEach(() => {
    page = new RastreioAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to gm!');
  });
});
