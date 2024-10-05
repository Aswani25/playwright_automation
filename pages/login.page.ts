import { expect, type Locator, type Page } from "@playwright/test";

export class LoginPage{
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.locator('#email1');
        this.passwordInput = page.locator('#password1');
        this.loginButton = page.locator('//button[text()="Sign in"]');
    }
    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async verifyLogin(){
        await expect(this.page).toHaveURL(/.*login/);
        await expect(this.loginButton).toBeVisible();
    }

}
