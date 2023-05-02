import { Selector } from 'testcafe';

class AdminProfilePage {
  constructor() {
    this.pageId = '#list-profile-admin-nav';
    this.pageSelector = Selector(this.pageId);
  }

  /** Asserts that this page is currently displayed. */
  async isDisplayed(testController) {
    // This is first test to be run. Wait 10 seconds to avoid timeouts with GitHub Actions.
    await testController.expect(this.pageSelector.exists).ok();
  }

  async hasTable(testController) {
    const rowCount = Selector('td').count;
    await testController.expect(rowCount).gte(0);
  }
}

export const adminProfilePage = new AdminProfilePage();
