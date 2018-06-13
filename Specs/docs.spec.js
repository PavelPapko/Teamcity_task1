describe('docs page tests', function () {

    var docsPage = require('../Pages/docsPage');
    var EC = protractor.ExpectedConditions;
    var isDisplayTable = EC.visibilityOf(docsPage.eventsTable);
    var isDisplay = EC.visibilityOf(docsPage.blogUrlWait);

    var blogPageUrl = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

    beforeEach(async function () {
        await browser.get('https://angular.io/docs');
    });

    it('check url of Home page', async function () {
        await docsPage.homeButton.click();
        expect(await browser.getCurrentUrl()).toBe('https://angular.io/');
    });

    it('check header and card elements on Docs page', async function () {
        await docsPage.docsButton.click();
        await docsPage.headerDocsPage.isDisplayed();
        let checkHeader = await docsPage.headerDocsPage.getText();
        expect(checkHeader).toBe('What is Angular?');
    });

    it('check header and card elements on Docs page', async function () {
        await docsPage.docsButton.click();
        await docsPage.headerDocsPage.isDisplayed();
        let checkHeader = docsPage.headerDocsPage.getText();
        expect(await checkHeader).toBe('What is Angular?');
    });

    it('check url of Blog page', async function () {
        await docsPage.blogButton.click();
        browser.ignoreSynchronization = true;
        expect(browser.getCurrentUrl()).toMatch(blogPageUrl);
    });

    it('check count of buttons on Docs page header', async function () {
        let listOfButtons = await docsPage.listOfButtons.count();
        expect(listOfButtons).toEqual(6);
    });

    it('check buttons in header on Docs page', async function () {
        let buttons = docsPage.listOfButtons.map(function (elem, index) {
            return {
                index: index,
                text: elem.getText(),
            };
        });
        expect(buttons).toEqual([
            {index: 0, text: ''},
            {index: 1, text: 'FEATURES'},
            {index: 2, text: 'DOCS'},
            {index: 3, text: 'RESOURCES'},
            {index: 4, text: 'EVENTS'},
            {index: 5, text: 'BLOG'},
        ]);
    });
});