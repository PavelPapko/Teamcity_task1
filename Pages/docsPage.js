var docsPage =  function () {

    this.homeButton = $('[title="Home"]');
    this.featuresButton = $('[title="Features"]');
    this.featuresHeader = $('#features--benefits');
    this.docsButton = $('[title="Docs"]');
    this.resourcesButton = $('[title="Resources"]');
    this.eventsButton = $('[title="Events"]');
    this.blogButton = $('[title="Blog"]');
    this.listOfButtons = $$('.nav-link');
    this.headerDocsPage = $('.no-toc');
    this.resourcesContainer = $('.resources-container');
    this.eventsTable = $('.is-full-width');
    this.blogUrlWait = $('.streamItem streamItem--section js-streamItem');

};
module.exports = new docsPage();