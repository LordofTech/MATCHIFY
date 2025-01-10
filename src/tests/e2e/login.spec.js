it("should login successfully", async () => {
    await driver.$("#loginButton").waitForDisplayed();
    await driver.$("#loginButton").click();
    await driver.$("#homePage").waitForDisplayed();
    expect(await driver.$("#homePage").isDisplayed()).toBe(true);
});
