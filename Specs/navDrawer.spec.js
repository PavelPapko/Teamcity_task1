describe('navigation drawer tests', function () {

    var navDrawerPage = require('../Pages/navDrawerPage');

    beforeEach(function (done) {
        browser.get('https://angular.io/docs').then(done).catch(done.fail);
    });

    it('check container on Getting Started page', function (done) {
        navDrawerPage.gettingStarted.click().then();
        navDrawerPage.gettingStartedContainer.isDisplayed()
            .then(done).catch(done.fail);
    });

    it('Tutorial Open&Close', function (done) {
        navDrawerPage.tutorialDropdown.click().then();
        navDrawerPage.tutorialDropdown.click().then();
        navDrawerPage.tutorialDropdownClose.isPresent()
            .then(done).catch(done.fail);
    });

    it('Navigation Drawer Close When Tutorial Open', function (done) {
        navDrawerPage.tutorialDropdown.click().then();
        navDrawerPage.docsMenuButton.click().then();
        navDrawerPage.docsMenuButton.click().then();
        navDrawerPage.tutorialDropdownElementsText.isDisplayed()
            .then(done).catch(done.fail);
    });

    it('check elements on Tutorial dropdown', async function () {
        await navDrawerPage.tutorialDropdown.click();
        await navDrawerPage.tutorialDropdownList.isPresent()
    });

    it('check header on Introduction Page', function (done) {
        navDrawerPage.tutorialDropdown.click().then();
        navDrawerPage.tutorialPart1.click().then();
        navDrawerPage.tutorialIntroductionHeader.isPresent()
            .then(done).catch(done.fail);
    });

    it('check header text on Services page', async function () {
        await navDrawerPage.tutorialDropdown.click();
        await navDrawerPage.tutorialPart6.click();
        let headerText = navDrawerPage.servicesHeader.getText();
        expect(await headerText).toBe('Services');
    });

    it('check header text on Language service page', async function () {
        await navDrawerPage.techniquesDropdown.click().then();
        await navDrawerPage.languageServiceTab.click().then();
        let headerTexth2 = navDrawerPage.languageServiceTabh2.getText();
        expect(await headerTexth2).toBe('Autocompletion');
    });
});
