describe('navigation drawer tests', function () {

    var navDrawerPage = require('../Pages/navDrawerPage');

    beforeEach(async function () {
        await browser.get('https://angular.io/docs');
    });

    it('check navdrawer buttons', async function () {
        await expect (navDrawerPage.titleGettingStarted.getText()).toBe('GETTING STARTED');
        await expect (navDrawerPage.titleTutorial.getText()).toBe('TUTORIAL');
        await expect (navDrawerPage.titleFundamentals.getText()).toBe('FUNDAMENTALS');
        await expect (navDrawerPage.titleAPI.getText()).toBe('API');
        await expect (navDrawerPage.titleVersion.getText()).toBe('stable (v6.0.4)');
    });

    it('Tutorial Open&Close', async function () {
        await navDrawerPage.tutorialDropdown.click();
        await navDrawerPage.tutorialDropdown.click();
        await navDrawerPage.tutorialDropdownClose.isPresent();
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
        await expect (navDrawerPage.tutorialPart1.getText()).toBe('1. Introduction');
        await expect (navDrawerPage.tutorialPart2.getText()).toBe('2. The Application Shell');
        await expect (navDrawerPage.tutorialPart3.getText()).toBe('3. The Hero Editor');
        await expect (navDrawerPage.tutorialPart4.getText()).toBe('4. Displaying a List');
        await expect (navDrawerPage.tutorialPart5.getText()).toBe('5. Master/Detail Components');
        await expect (navDrawerPage.tutorialPart6.getText()).toBe('6. Services');
        await expect (navDrawerPage.tutorialPart7.getText()).toBe('7. Routing');
        await expect (navDrawerPage.tutorialPart8.getText()).toBe('8. HTTP');
    });

    it('check header on Introduction Page', async function () {
        await navDrawerPage.tutorialDropdown.click();
        await navDrawerPage.tutorialPart1.click();
        await navDrawerPage.tutorialIntroductionHeader.isPresent();
        let introductionHeader = await navDrawerPage.tutorialIntroductionHeader.getText();
        expect(introductionHeader).toBe('Tutorial: Tour of Heroes');
    });
});
