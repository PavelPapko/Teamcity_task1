describe('docs page tests', function () {

    var docsPage = require('../Pages/docsPage');
    var EC = protractor.ExpectedConditions;
    var isDisplayTable = EC.visibilityOf(docsPage.eventsTable);
    var isDisplay = EC.visibilityOf(docsPage.blogUrlWait);

    beforeEach(async function () {
        await browser.get('https://angular.io/docs');
    });

    it('check url of Home page', async function () {
        await docsPage.homeButton.click();
        expect(await browser.getCurrentUrl()).toBe('https://angular.io/');
    });

    xit('check header on Features page', async function () {
        await docsPage.featuresButton.click();
        await docsPage.featuresHeader.isDisplayed();
        let checkHeader = await docsPage.featuresHeader.getText();
        expect(await checkHeader).toBe('FEATURES & BENEFITS');
    });

    it('check header and card elements on Docs page', async function () {
        await docsPage.docsButton.click();
        await docsPage.headerDocsPage.isDisplayed();
        let checkHeader = docsPage.headerDocsPage.getText();
        expect(await checkHeader).toBe('What is Angular?');
    });

    xit('check container on Resources page', async function () {
        await docsPage.resourcesButton.click();
        await docsPage.resourcesContainer.isDisplayed();
    });

    it('check table on Events page', async function () {
        await docsPage.eventsButton.click();
        browser.wait(await isDisplayTable, 5000, 'Превышено время ожидания!');
        await docsPage.eventsTable.isDisplayed();
    });

    xit('check url of Blog page', async function () {
        await docsPage.blogButton.click();
        browser.ignoreSynchronization = true;
        browser.wait(await isDisplay, 5000, 'Превышено время ожидания!');
        expect(await browser.getCurrentUrl()).toBe('https://blog.angular.io/');
    });

    xit('check count of buttons on Docs page header', async function () {
        expect(await docsPage.listOfButtons.count()).toBe(6);
    });

    xit('check buttons in header on Docs page', async function () {
        let buttons = await docsPage.listOfButtons.map(function (elem, index) {
            return {
                index: index,
                text: elem.getText(),
            };
        });
        expect(await buttons).toEqual([
            {index: 0, text: ''},
            {index: 1, text: 'FEATURES'},
            {index: 2, text: 'DOCS'},
            {index: 3, text: 'RESOURCES'},
            {index: 4, text: 'EVENTS'},
            {index: 5, text: 'BLOG'},
        ]);
    });
});