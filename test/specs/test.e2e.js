
describe('My Login application', () => {
    it("1 test", async function() {
        await browser.url("https://webdriver.io/docs/gettingstarted/");
        await browser.pause(3000);
        await expect(await browser.getUrl()).toBe("https://webdriver.io/docs/gettingstarted/");
        await $("#__docusaurus > nav > div.navbar__inner > div:nth-child(1) > a:nth-child(8)").waitForDisplayed();
        await $("#__docusaurus > nav > div.navbar__inner > div:nth-child(1) > a:nth-child(8)").click();
        
        await expect(await browser.getUrl()).toBe("https://webdriver.io/docs/sponsor");
    })
})

