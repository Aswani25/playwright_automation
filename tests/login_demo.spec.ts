import {test} from '@playwright/test'

test('Demo Login Test 1', async({page}) => {
    await page.goto('https://demo.applitools.com/');
    await page.locator('#username').fill('Aswani');
    await page.locator('#password').fill('1234');
    // waiting for Sign in button to be visible
    await page.waitForSelector('#log-in', {timeout: 5000});
    await page.locator('#log-in').click();
});

test('Demo login Test 2', async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('banner').getByText('manda user').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
});

test('Demo login Test 3', async({page}) => {
    await page.goto('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.getByLabel('Email:').click();
    await page.getByLabel('Email:').clear()
    await page.getByLabel('Email:').fill('admin@yourstore.com');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').fill('admin');
    await page.getByRole('button', { name: 'Log in' }).click();  
});