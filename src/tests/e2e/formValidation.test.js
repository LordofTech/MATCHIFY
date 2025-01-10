it('should show error for missing mandatory fields', async () => {
    await driver.$('button[type="submit"]').click(); // Try to submit without filling form
    const errorMessage = await driver.$('div.error-message');
    expect(await errorMessage.getText()).toContain('Please fill in all mandatory fields!');
});

it('should show error for invalid image upload', async () => {
    const uploadButton = await driver.$('input[type="file"]');
    await uploadButton.setValue('/path/to/invalid-file.txt'); // Upload invalid file type
    await driver.$('button[type="submit"]').click();
    const errorMessage = await driver.$('div.error-message');
    expect(await errorMessage.getText()).toContain('Invalid image file!');
});