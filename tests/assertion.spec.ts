import {test, expect} from '@playwright/test'

test('assertion demo', async({page}) => {
    await page.goto('https://kitchen.applitools.com/');
    // Assertion 
    // Check element present or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);

    if(await page.$('The Kitchen')){
        await page.getByRole('heading', { name: 'The Kitchen' }).click();
    }

    // Check element visible or hidden
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();

    // check element enable or disable
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
    // await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();

    // Check element Text match value or not
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveText('The Kitchen');
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).not.toHaveText('The Kitchen1');

    // Check Attribute value
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', 'chakra-heading css-dpmy2a');
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', /.*css-dpmy2a/);
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveClass('chakra-heading css-dpmy2a');

    // Check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/');
    await expect(page).toHaveTitle('The Kitchen');

    // visual validation
    // await expect(page).toHaveScreenshot();
});