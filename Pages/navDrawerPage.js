var navDrawerPage =  function () {

    this.docsMenuButton = $('[title="Docs menu"]');
    this.gettingStarted = $('[title^="A gentle"]');
    this.tutorialDropdown = $('[title^="The Tour"]');
    this.tutorialDropdownClose = $('.vertical-menu-item heading ng-star-inserted level-1 collapsed');
    this.tutorialDropdownList = $('.heading-children level-1 expanded');
    this.tutorialDropdownElementsText = $('[title^="Part "]');
    this.tutorialPart1 = $('[title^="Part 1:"]');
    this.tutorialPart6 = $('[title^="Part 6:"]');
    this.tutorialIntroductionHeader = $('.no-toc');
    this.servicesHeader = $('#services');
    this.techniquesDropdown = $('[title^="Techniques for putting "]');
    this.languageServiceTab = $('[title^="Use Angular "]');
    this.languageServiceTabh2 = $('#autocompletion');
    this.gettingStartedContainer = $('div.toc-container no-print ng-star-inserted');

};
module.exports = new navDrawerPage();