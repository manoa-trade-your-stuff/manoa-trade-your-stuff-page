import { landingPage } from './landing.page';
import { signinPage } from './signin.page';
import { signoutPage } from './signout.page';
import { navBar } from './navbar.component';
import { profilePage } from './profile.page';
import { addItemPage } from './addItem.page';
import { categoryPage } from './category.page';
import { reportPage } from './report.page';
import { adminItemListPage } from './adminItemList.page';
import { adminProfilePage } from './adminProfile.page';
import { adminComplaintPage } from './adminComplaint.page';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. */
const credentials = { username: 'john@foo.com', password: 'changeme' };
const admin = { username: 'admin@foo.com', password: 'changeme' };

fixture('meteor-application-template-react localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async (testController) => {
  await landingPage.isDisplayed(testController);
});

test('Test that signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.isLoggedIn(testController, credentials.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that users profile', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoProfilePage(testController);
  await profilePage.isDisplayed(testController);
  await profilePage.hasTable(testController);
});

test('Test that add item page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoAddItemPage(testController);
  await addItemPage.isDisplayed(testController);
});

test('Test that category page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoCategoryPage(testController);
  await categoryPage.isDisplayed(testController);
});

test('Test that report page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, credentials.username, credentials.password);
  await navBar.gotoReportPage(testController);
  await reportPage.isDisplayed(testController);
});

test('Test that admin signin and signout work', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.isLoggedIn(testController, admin.username);
  await navBar.logout(testController);
  await signoutPage.isDisplayed(testController);
});

test('Test that admin profile', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoProfilePage(testController);
  await profilePage.isDisplayed(testController);
  await profilePage.hasTable(testController);
});

test('Test that admin add item page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoAddItemPage(testController);
  await addItemPage.isDisplayed(testController);
});

test('Test that admin category page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoCategoryPage(testController);
  await categoryPage.isDisplayed(testController);
});

test('Test that admin report page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoReportPage(testController);
  await reportPage.isDisplayed(testController);
});

test('Test that admin item list page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoAdminItemPage(testController);
  await adminItemListPage.isDisplayed(testController);
});

test('Test that admin profile list page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoAdminProfilePage(testController);
  await adminProfilePage.isDisplayed(testController);
});

test('Test that complaints list page', async (testController) => {
  await navBar.gotoSignInPage(testController);
  await signinPage.signin(testController, admin.username, admin.password);
  await navBar.gotoAdminComplaintPage(testController);
  await adminComplaintPage.isDisplayed(testController);
});
