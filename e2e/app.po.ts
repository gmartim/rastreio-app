import { browser, by, element } from 'protractor';

export class RastreioAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gm-root h1')).getText();
  }
}
