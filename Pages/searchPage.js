var searchPage =  function () {

    this.searchField = $('[type="search"]');
    this.searchResultArea = $('.priority-pages');
    this.searchResult = $$('.search-area ng-star-inserted');
    this.searchResultNotValid = $('p.ng-star-inserted');

};
module.exports = new searchPage();