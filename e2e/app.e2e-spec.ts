import { BacklogPage } from './app.po';

describe('backlog App', () => {
  let page: BacklogPage;

  beforeEach(() => {
    page = new BacklogPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
