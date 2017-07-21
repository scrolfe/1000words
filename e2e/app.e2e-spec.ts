import { OneThousandWordsPage } from './app.po';

describe('one-thousand-words App', () => {
  let page: OneThousandWordsPage;

  beforeEach(() => {
    page = new OneThousandWordsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
