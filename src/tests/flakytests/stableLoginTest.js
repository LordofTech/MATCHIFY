// stableLoginTest.js
const { remote } = require('webdriverio');

describe('Stable Login Test', () => {
  it('should login successfully', async () => {
    const browser = await remote({
      capabilities: {
        browserName: 'chrome',
      },
    });

    await browser.url('http://localhost:3000/login');
    const usernameInput = await browser.$('#username');
    const passwordInput = await browser.$('#password');
    const loginButton = await browser.$('#loginButton');

    await usernameInput.setValue('testuser');
    await passwordInput.setValue('password123');
    await loginButton.click();

    // Improved assertion with waitForExist
    const successMessage = await browser.$('#success');
    await successMessage.waitForExist({ timeout: 5000 });
    expect(await successMessage.getText()).toBe('Welcome back!');

    await browser.deleteSession();
  });
});