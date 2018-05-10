var navDrawerPage =  function () {

    this.docsMenuButton = $('[title="Docs menu"]');
    this.gettingStarted = $('[title^="A gentle"]');
    this.tutorialDropdown = $('[title^="The Tour"]');
    this.tutorialDropdownClose = $('.vertical-menu-item heading ng-star-inserted level-1 collapsed');
    this.tutorialDropdownList = $('.heading-children level-1 expanded');
    this.tutorialDropdownElementsText = $('[title^="Part 1:"]');
    this.tutorialPart1 = $('[title^="Part 1:"]');
    this.tutorialPart6 = $('[title^="Part 6:"]');
    this.tutorialIntroductionHeader = $('.no-toc');
    this.servicesHeader = $('h1#services');
    this.techniquesDropdown = $('[title^="Techniques for putting "]');
    this.languageServiceTab = $('[title^="Use Angular "]');
    this.languageServiceTabh2 = $('h2#autocompletion');
    this.gettingStartedContainer = $('div.content');

};
module.exports = new navDrawerPage();