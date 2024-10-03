import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/login.page';
import { HomePage } from '../pages/home.page';

test.use({viewport:{width:1920, height: 1080}})

test('Login to Application using POM', async({page}) => {
    await page.goto('https://freelance-learn-automation.vercel.app/login');
    const loginPage = new LoginPage(page);
    await loginPage.login('admin@email.com', 'admin@123')
    const homePage = new HomePage(page);
    await homePage.verifyManageOption();
    await homePage.logout();
    await loginPage.verifyLogin();
});