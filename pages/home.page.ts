import { expect, type Locator, type Page } from "@playwright/test";

export class HomePage{
    readonly page: Page;
    readonly menuImg: Locator;
    readonly signoutButton: Locator;
    readonly manageButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.menuImg = page.locator('//img[@alt="menu"]');
        this.signoutButton = page.getByRole('button', { name: 'Sign out' });
        this.manageButton = page.locator('//span[text()="Manage"]');
    }
    async verifyManageOption(){
        await expect(this.manageButton).toBeVisible();
    }
    async logout(){
        await this.menuImg.click();
        await this.signoutButton.click();
    }
}