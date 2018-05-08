describe('navigation drawer tests', function () {

    var navDrawerPage = require('../Pages/navDrawerPage');

    beforeEach(function (done) {
        browser.get('https://angular.io/docs').then(done).catch(done.fail);
    });

    xit('check container on Getting Started page', function (done) {
        navDrawerPage.gettingStarted.click().then(function () {
            navDrawerPage.gettingStartedContainer.isDisplayed();
        }).then(done).catch(done.fail);
    });

    xit('Tutorial Open&Close', function (done) {
        navDrawerPage.tutorialDropdown.click().then(function () {
            navDrawerPage.tutorialDropdown.click().then(function () {
                navDrawerPage.tutorialDropdownClose.isPresent();
            }).then(done).catch(done.fail);
        });
    });

    xit('Navigation Drawer Close When Tutorial Open', function (done) {
        navDrawerPage.tutorialDropdown.click().then(function () {
            navDrawerPage.docsMenuButton.click().then(function () {
                navDrawerPage.docsMenuButton.click().then(function () {
                    navDrawerPage.tutorialDropdownElementsText.isDisplayed();
                }).then(done).catch(done.fail);
            });
        });
    });

    xit('check elements on Tutorial dropdown', function (done) {
        navDrawerPage.tutorialDropdown.click().then(function () {
            navDrawerPage.tutorialDropdownList.isPresent();
        }).then(done).catch(done.fail);
    });

    xit('check header on Introduction Page', function (done) {
        navDrawerPage.tutorialDropdown.click().then(function () {
            navDrawerPage.tutorialPart1.click().then(function () {
                navDrawerPage.tutorialIntroductionHeader.isPresent();
            }).then(done).catch(done.fail);
        });
    });

    xit('check header text on Services page', function (done) {
        navDrawerPage.tutorialDropdown.click().then(function () {
            navDrawerPage.tutorialPart6.click().then(function () {
                navDrawerPage.servicesHeader.getText().then(function (text) {
                    expect(text).toBe('Services');
                }).then(done).catch(done.fail);
            });
        });
    });

    it('check header text on Language service page', function (done) {
        navDrawerPage.techniquesDropdown.click().then(function () {
            navDrawerPage.languageServiceTab.click().then(function () {
                navDrawerPage.languageServiceTabh2.getText().then(function (text) {
                    expect(text).toBe('Autocompletion');
                }).then(done).catch(done.fail);
            });
        });
    });
});
