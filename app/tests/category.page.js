import { Selector } from 'testcafe';

class CategoryPage {
  constructor() {
    this.pageId = '#categories-nav';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.expect(this.pageSelector.exists).ok();
  }
}

export const categoryPage = new CategoryPage();
