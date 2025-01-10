const { remote } = require('webdriverio');

let browser;

before(async () => {
  browser = await remote({
    capabilities: {
      platformName: "Android",
      "appium:app": "/path/to/app.apk",
      "appium:automationName": "UiAutomator2",
    },
  });
});

after(async () => {
  await browser.deleteSession();
});

describe("Profile Creation Tests", () => {
  it("should successfully create a profile", async () => {
    await browser.url("http://localhost:3000");

    await browser.$('[name="name"]').setValue("John Doe");
    await browser.$('[name="age"]').setValue("30");
    await browser.$('[name="gender"]').selectByVisibleText("Male");
    await browser.$('[name="location"]').setValue("New York");
    await browser.$('[name="interests"]').setValue("Music, Reading");
    await browser.$('[name="profilePicture"]').addValue("/path/to/picture.jpg");
    await browser.$("button[type='submit']").click();

    const successMessage = await browser.$("div.success").getText();
    expect(successMessage).toBe("Profile Created Successfully!");
  });
});
