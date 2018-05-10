describe('search module tests', function () {

    var searchPage = require('../Pages/searchPage');
    var EC = protractor.ExpectedConditions;
    var isDisplay = EC.visibilityOf(searchPage.searchResultArea);

    beforeEach(async function () {
        await browser.get('https://angular.io/docs');
    });

    it('input valid data in search field', async function () {
        await searchPage.searchField.click();
        await searchPage.searchField.sendKeys('get');
        browser.wait(isDisplay, 5000, 'Превышено время ожидания!');
        await searchPage.searchResult.isDisplayed();
        await searchPage.searchField.clear();
    });

    it('input not valid data in search field', async function () {
        await searchPage.searchField.click();
        await searchPage.searchField.sendKeys('qwerty');
        browser.wait(isDisplay, 5000, 'Превышено время ожидания!');
        let checkSearchRes = searchPage.searchResultNotValid.getText();
        expect(await checkSearchRes).toBe('Searching ...');
    });

});