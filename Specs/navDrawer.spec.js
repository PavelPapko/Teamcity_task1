describe('navigation drawer tests', function () {

    var navDrawerPage = require('../Pages/navDrawerPage');

    var EC = protractor.ExpectedConditions;
    var isDisplay = EC.visibilityOf(navDrawerPage.headerStep3GettingStarted);

    beforeEach(async function () {
        await browser.get('https://angular.io/docs');
    });

    it('Tutorial Open&Close', async function () {
        await navDrawerPage.tutorialDropdown.click();
        await navDrawerPage.tutorialDropdown.click();
        await navDrawerPage.tutorialDropdownClose.isPresent()
    });

    it('Navigation Drawer Close When Tutorial Open', async function () {
        await navDrawerPage.tutorialDropdown.click();
        await navDrawerPage.docsMenuButton.click();
        await navDrawerPage.docsMenuButton.click();
        let text = await navDrawerPage.tutorialPart1.getText();
        expect(text).toBe('1. Introduction');
    });

    it('check elements on Tutorial dropdown', async function () {
        await navDrawerPage.tutorialDropdown.click();
        await navDrawerPage.tutorialDropdownList.isPresent();
    });

    it('check header on Introduction Page', async function () {
        await navDrawerPage.tutorialDropdown.click();
        await navDrawerPage.tutorialPart1.click();
        await navDrawerPage.tutorialIntroductionHeader.isPresent();
        let introductionHeader = await navDrawerPage.tutorialIntroductionHeader.getText();
        expect(introductionHeader).toBe('Tutorial: Tour of Heroes');
    });
});
