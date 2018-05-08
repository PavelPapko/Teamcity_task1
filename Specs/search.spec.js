describe('search module tests', function () {

    var searchPage = require('../Pages/searchPage');
    var EC = protractor.ExpectedConditions;
    var isDisplay = EC.visibilityOf(searchPage.searchResultArea);

    beforeEach(function (done) {
        browser.get('https://angular.io/docs').then(done).catch(done.fail);
    });

    xit('input valid data in search field', function (done) {
        searchPage.searchField.click().then(function () {
            searchPage.searchField.sendKeys('get').then(function () {
                browser.wait(isDisplay, 5000, 'Превышено время ожидания!').then(function () {
                    searchPage.searchResult.isDisplayed().then(function () {
                        searchPage.searchField.clear();
                    }).then(done).catch(done.fail);
                });
            });
        });
    });

    xit('input not valid data in search field', function (done) {
        searchPage.searchField.click().then(function () {
            searchPage.searchField.sendKeys('qwerty').then(function () {
                searchPage.searchResultNotValid.getText().then(function (text) {
                    expect(text).toBe('Searching ...');
                }).then(done).catch(done.fail);
            });
        });
    });

});