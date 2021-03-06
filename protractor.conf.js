exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    suites: {
        search: ['./Specs/search.spec.js', './Specs/navDrawer.spec.js', './Specs/docs.spec.js']
    },

    SELENIUM_PROMISE_MANAGER: false,

    capabilities: {
        browserName: 'chrome'},

    onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    }
};