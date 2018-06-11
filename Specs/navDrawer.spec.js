describe('navigation drawer tests', function () {

    var navDrawerPage = require('../Pages/navDrawerPage');

    var EC = protractor.ExpectedConditions;
    var isDisplay = EC.visibilityOf(navDrawerPage.headerStep3GettingStarted);

    beforeEach(async function () {
        await browser.get('https://angular.io/docs');
    });

    xit('check container on Getting Started page', async function () {
        await navDrawerPage.gettingStarted.click();
        browser.waitForAngularEnabled(true);
        await navDrawerPage.gettingStartedContainer.isDisplayed();
        await navDrawerPage.navGettingStarted.isDisplayed();
        await navDrawerPage.titleNavGettingStarted.click();
        let text = await navDrawerPage.headerStep3GettingStarted.getText();
        expect(text).toBe('Step 3: Serve the application')
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

    xit('check header text on Services page', async function () {
        await navDrawerPage.tutorialDropdown.click();
        await navDrawerPage.tutorialPart6.click();
        browser.waitForAngularEnabled(true);
        let headerText = navDrawerPage.servicesHeader.getText();
        expect(await headerText).toBe('Services');
    });

    xit('check header text on Language service page', async function () {
        await navDrawerPage.techniquesDropdown.click();
        await navDrawerPage.languageServiceTab.click();
        browser.waitForAngularEnabled(true);
        let headerTexth2 = navDrawerPage.languageServiceTabh2.getText();
        expect(await headerTexth2).toBe('Autocompletion');
    });
});
