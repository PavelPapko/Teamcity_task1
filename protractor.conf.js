exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    suites: {
        search: ['./Specs/search.spec.js', './Specs/navDrawer.spec.js', './Specs/docs.spec.js']
    },

    SELENIUM_PROMISE_MANAGER: false,

    capabilities: {
        browserName: 'chrome'}
};