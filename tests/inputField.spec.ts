import {test, expect} from '@playwright/test'

test('Handle Input field', async({page}) => {
    await page.goto('https://www.saucedemo.com/v1/');
    // This command is used to pause the execution of the code
    // await page.pause(); // This command is used to pause the execution of the code and it open playwright inspector
    // await page.pause(); 
    // using any object property
    await page.click('id=user-name');
    await page.locator('id=user-name').fill('Edison');
    await page.locator('[id="user-name"]').fill('Einstian')

    // Using CSS selector
    // login button
    await page.locator('#login-button').click();

    // Using x-path
    await page.locator('xpath=//input[@name="password"]').fill('Faraday');
    await page.locator('//input[@name="password"]').fill('Ramanujan');

    // using Text
    await page.locator('text= LOGIN').click();
    await page.locator('input:has-text("LOGIN")').click();
});