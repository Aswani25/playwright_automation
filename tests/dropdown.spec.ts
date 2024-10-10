import {test, expect} from '@playwright/test'

test('Select values from dropdown', async({page}) => {
    await page.goto('https://freelance-learn-automation.vercel.app/signup');
    // Using visible text
    await page.locator('#state').selectOption({label: 'Goa'});
    await page.waitForTimeout(1000);
    // Using Value
    await page.locator('#state').selectOption({value: 'Bihar'});
    await page.waitForTimeout(1000);
    // Using index
    await page.locator('#state').selectOption({index: 3});
    await page.waitForTimeout(3000);

    const dropdownValues: any = await page.locator('#state').textContent();
    expect(dropdownValues.includes('Bihar')).toBeTruthy()
    expect(dropdownValues).toContain('Goa');
});

test.only('Select values from dropdown 1', async({page}) => {
    await page.goto('https://freelance-learn-automation.vercel.app/signup');
    let state: any = await page.$('#state');
    await page.locator('#state').selectOption({label: 'Goa'});
    let allElements = await page.$$('option');
    let ddStatus = false;
    for(let i=0; i < allElements.length; i++){
        let element = allElements[i];
        let value: any = await element.textContent();
        console.log(value);
        if(value === "Mizoram"){
            ddStatus = true;
            break;
        }        
    }
    expect(ddStatus).toBeTruthy();
});