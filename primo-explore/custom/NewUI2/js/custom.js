(function(){
  "use strict";
  'use strict';
  
  var app = angular.module('viewCustom', ['angularLoad', 'externalSearch']);
  
  "use strict";
  'use strict';
  
  /* Load jQuery */
  var jquerymini = document.createElement("script");
  jquerymini.type = "text/javascript";
  jquerymini.async = true;
  jquerymini.src = "https://code.jquery.com/jquery-2.2.4.min.js";
  var c = document.getElementsByTagName("script")[0];
  c.parentNode.insertBefore(jquerymini, c);
  
  /* Load LibAnswers 
  var LibAnswers = document.createElement("script");
  LibAnswers.type = "text/javascript";
  LibAnswers.async = true;
  LibAnswers.src = "https://v2.libanswers.com/load_chat.php?hash=8695fcdfdfdf1ec2b50aabde6d1afd61";
  var d = document.getElementsByTagName("script")[0];
  d.parentNode.insertBefore(LibAnswers, d); 
  */
  
  (function () {
    "use strict";
    'use strict';
  
    /****************************************************************************************************/
  
    /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/
  
    /****************************************************************************************************/

    /* <!-- Google Tag Manager --> added to track events within Primo VE--red 07 October 2022 */
var GTM_CODE = 'GTM-PPW6CDM';
(function (w, d, s, l, i) {
w[l] = w[l] || [];w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });var f = d.getElementsByTagName(s)[0],
  j = d.createElement(s),
  dl = l != 'dataLayer' ? '&l=' + l : '';j.async = true;j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j, f);
})(window, document, 'script', 'dataLayer', GTM_CODE);
/* <!-- End Google Tag Manager --> */

//START - Google Analytics

var googleAnalyticsUrl = document.createElement('script');
googleAnalyticsUrl.src = "https://www.googletagmanager.com/gtag/js?id=G-336164211";
googleAnalyticsUrl.type = 'text/javascript';
googleAnalyticsUrl.async = true;
document.head.appendChild(googleAnalyticsUrl);

var googleAnalyticsCode = document.createElement('script');
googleAnalyticsCode.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-4ZK8S0YVT2',{ 'debug_mode':true });`;
document.head.appendChild(googleAnalyticsCode);
//gtag('config', 'G-336164211');
//END - Google Analytics
  
    /* StackMap: Start */
  
    (function () {
  
      var a = document.querySelector("head");
      var css1 = document.createElement("link");
      css1.type = "text/css";
      css1.rel = "Stylesheet";
      css1.href = " https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css ";
      css1.crossorigin = "anonymous";
      a.appendChild(css1);
  
      var css2 = document.createElement("link");
      css2.type = "text/css";
      css2.rel = "Stylesheet";
      css2.href = " https://www.stackmapintegration.com/kstate-primo2/StackMap.min.css ";
      a.appendChild(css2);
  
      var w = document.createElement("script");
      w.type = "text/javascript";w.async = true;
      w.src = " https://www.stackmapintegration.com/kstate-primo2/StackMap.min.js ";
      var b = document.body;
      b.appendChild(w);
    })();
    /* StackMap: END */
  

    /*Adding Author and Date for Digital Collections*/
    /*For creators look at addata.addau*/
    app.component('prmGalleryItemAfter', {
      bindings: {
      parentCtrl: '<'
      },
      controller: function () {
      var $ctrl = this;
      $ctrl.$onInit = function () {
      try {
      $ctrl.author = $ctrl.parentCtrl.item.pnx.addata.au[0];
      } catch (e) {
      $ctrl.author = '';
      }
      try {
      $ctrl.date = $ctrl.parentCtrl.item.pnx.display.creationdate[0];
      } catch (e) {
      $ctrl.date = '';
      }
      $ctrl.hasDate = !!$ctrl.date;
      $ctrl.hasAuthor = !!$ctrl.author;
      };
      },
      template: '<div ng-if="$ctrl.hasDate">{{$ctrl.date}}</div> <div ng-if="$ctrl.hasAuthor">{{$ctrl.author}}</div>'
      });
    //Add code for COVID Alert
    
    app.component('prmSearchBarAfterAppStoreGenerated', {
        bindings: {parentCtrl: '<'},
        template: '<md-card class="alert-bar"><md-card-content class="alert-bar-content"><p>Our Interlibrary Loan provider is currently experiencing issues. We are working with the vendor to resolve access. <br> To request help, you can visit <a href="https://lib.k-state.edu/services-support/research-help/">with a librarian. </a></p></md-card-content></md-card>'
    });
    
  
    //Auto activates the filter for items in full display
    //written on 2/4/20 by Joe Ferguson from the University of Tennessee, Knoxville
    app.component('prmLocationItemsAfterAppStoreGenerated', {
      bindings: { parentCtrl: '<' },
      controller: function($scope) {
        this.$onInit = function(){
          {
            var myVar = setInterval(activateFilter, 1000);
            function activateFilter() {
              if ($("span:contains('Filters')").length) {
                clearInterval(myVar);
                return;
              }
              if ($("[id^='filter']").length) {
                $("[id^='filter']").parent().click();
              }
            }
          }
        };
      }
    });

    /* Updated Library Logo */
    app.component('prmLogoAfter', {
    bindings: {parentCtrl: '<'},
    template: '<div class="libraryLogo"><div class="libraryPipe"><div class="libraryUrl"><a href="https://lib.k-state.edu/">Libraries</a></div></div></div>'
    });
    /* Updated Library Logo END*/
  
    //Add External Search from WSU -- revised JMcWilliams 20180619
    //Modified 10/2022 to function within AngularJS 1.8 migration 
    angular
    .module('externalSearch', []).value('searchTargets', []).component('prmFacetAfterAppStoreGenerated', {
      bindings: { parentCtrl: '<' },
      //controller: ['externalSearchService', function (externalSearchService) {
      controller: ['externalSearchService', '$scope', function (externalSearchService, $scope) {
        this.$onInit = function () {
        externalSearchService.setController(this.parentCtrl);
        externalSearchService.addExtSearch();
        $scope.$watch('$ctrl.parentCtrl.facets', function(){
          externalSearch.addExtSearch()});
        }
      }]
    }).component('prmPageNavMenuAfterAppStoreGenerated', {
      controller: ['externalSearchService', function (externalSearchService) {
        this.$onInit = function () {
        if (externalSearchService.getController()) externalSearchService.addExtSearch();
        }
      }]
    }).component('prmFacetExactAfterAppStoreGenerated', {
      bindings: { parentCtrl: '<' },
      template: '\n      <div ng-if="name === \'External Search\'">\n          <div ng-hide="$ctrl.parentCtrl.facetGroup.facetGroupCollapsed">\n              <div class="section-content animate-max-height-variable">\n                  <div class="md-chips md-chips-wrap">\n                      <div ng-repeat="target in targets" aria-live="polite" class="md-chip animate-opacity-and-scale facet-element-marker-local4">\n                          <div class="md-chip-content layout-row" role="button" tabindex="0">\n                              <strong dir="auto" title="{{ target.name }}">\n                                  <a ng-href="{{ target.url + target.mapping(queries, filters) }}" target="_blank">\n                                      <img ng-src="{{ target.img }}" width="22" height="22" alt="{{ target.alt }}" style="vertical-align:middle;"> {{ target.name }}\n                                  </a>\n                              </strong>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>',
      controller: ['$scope', '$location', 'searchTargets', function ($scope, $location, searchTargets) {
        this.$onInit = function () {
        $scope.name = this.parentCtrl.facetGroup.name;
        $scope.targets = searchTargets;
        var query = $location.search().query;
        var filter = $location.search().pfilter;
        //$scope.queries = Array.isArray(query) ? query : query ? [query] : false;
        //$scope.filters = Array.isArray(filter) ? filter : filter ? [filter] : false;
        $scope.queries = Object.prototype.toString.call(query) === '[object Array]' ? query : query ? [query] : false
        $scope.filters = Object.prototype.toString.call(filter) === '[object Array]' ? filter : filter ? [filter] : false
        }
      }]
    }).factory('externalSearchService', function () {
      return {
        getController: function () {
          return this.prmFacetCtrl || false;
        },
        setController: function (controller) {
          this.prmFacetCtrl = controller;
        },
        addExtSearch: function addExtSearch() {
          var xx=this;
          var checkExist = setInterval(function () {
  
            if (xx.prmFacetCtrl.facetService.results[0] && xx.prmFacetCtrl.facetService.results[0].name !="External Search") {
              if (xx.prmFacetCtrl.facetService.results.name !== 'External Search') {
                xx.prmFacetCtrl.facetService.results.unshift({
                  name: 'External Search',
                  displayedType: 'exact',
                  limitCount: 0,
                  facetGroupCollapsed: true,
                  values: undefined
                });
              }
              clearInterval(checkExist);
            }
          }, 100);
        }
      };
    });
    app.value('searchTargets', [{
      "name": "Worldcat",
      "url": "https://kansasstateuniversity.on.worldcat.org/search?",
      "img": "/discovery/custom/01KSU_INST-NewUI/img/worldcat-logo.png",
      "alt": "Worldcat Logo",
      mapping: function mapping(queries, filters) {
        var query_mappings = {
          'any': 'kw',
          'title': 'ti',
          'creator': 'au',
          'subject': 'su',
          'isbn': 'bn',
          'issn': 'n2'
        };
        try {
          return 'queryString=' + queries.map(function (part) {
            var terms = part.split(',');
            var type = query_mappings[terms[0]] || 'kw';
            var string = terms[2] || '';
            var join = terms[3] || '';
            return type + ':' + string + ' ' + join + ' ';
          }).join('');
        } catch (e) {
          return '';
        }
      }
    }, {
      "name": "Google Scholar",
      "url": "https://scholar.google.com/scholar?inst=6485013114777526331&q=",
      "img": "/discovery/custom/01KSU_INST-NewUI/img/logo-googlescholar.png",
      "alt": "Google Scholar Logo",
      mapping: function mapping(queries, filters) {
        try {
          return queries.map(function (part) {
           var terms = part.split(/^(any\,contains\,)/)[2];
           var termed = terms.split(/(\,AND)$/)[0];
           return termed.replace(/~2F/, "%2F");
          }).join(' ');
        } catch (e) {
          return '';
        }
      }
    }, {
      "name": "EBSCO",
      "url": "http://er.lib.ksu.edu/login?url=http://search.ebscohost.com/login.aspx?direct=true&scope=site&type=1&site=ehost-live&db=27h,aph,gnh,agr,awh,ahl,h9h,h9i,h9j,h9k,h9m,ant,asa,aax,aft,ndh,n4h,n9h,n8h,buh,ufh,cph,c9h,e872sww,cja,eric,eax,eft,hev,zbh,funk,8gh,hxh,hch,e871sww,khh,hjh,fqh,lgh,lxh,llf,lii,e870sww,lfh,e865sww,ulh,cmedm,kah,mzh,e864sww,f5h,msn,lth,mmt,e866sww,mih,mth,mah,n5h,nsm,ddu,24h,pix,e867sww,prh,tfh,pbh,rft,rgr,bwh,rlh,sph,b9h,tth,trh,tdh,voh,nmr,fzh,nlebk,e001mww&lang=en&authtype=ip&bquery=",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/EBSCO_Information_Services_20xx_logo.svg/200px-EBSCO_Information_Services_20xx_logo.svg.png",
      "alt": "EBSCO Logo",
      mapping: function mapping(queries, filters) {
        try {
          return queries.map(function (part) {
           var terms = part.split(/^(any\,contains\,)/)[2];
           var termed = terms.split(/(\,AND)$/)[0];
           return termed.replace(/~2F/, "%2F");
          }).join(' ');
        } catch (e) {
          return '';
        }
      }
    }]);
  
    /****************************************************************************************************/
    // Begin BrowZine - Primo Integration...
  
    window.browzine = {
      api: "https://public-api.thirdiron.com/public/v1/libraries/160",
      apiKey: "0cfaacdf-9b7b-4181-bb4a-23d0433b7c04",
  
      journalCoverImagesEnabled: true,
  
      journalBrowZineWebLinkTextEnabled: true,
      journalBrowZineWebLinkText: "View Journal Contents",
  
      acticleBrowZineWebLinkTextEnabled: true,
      articleBrowZineWebLinkText: "View Issue Contents",
  
      articlePDFDownloadLinkEnabled: true,
      articlePDFDownloadLinkText: "Download PDF",
  
      printRecordsIntegrationEnabled: true,
  
      unpaywallEmailAddressKey: "exlibrissupport@ksu.edu",
  
      articlePDFDownloadViaUnpaywallEnabled: true,
      articlePDFDownloadViaUnpaywallText: "Download PDF (via Unpaywall)",
  
      articleLinkViaUnpaywallEnabled: true,
      articleLinkViaUnpaywallText: "Read Article (via Unpaywall)",
  
      articleAcceptedManuscriptPDFViaUnpaywallEnabled: true,
      articleAcceptedManuscriptPDFViaUnpaywallText: "Download PDF (Accepted Manuscript via Unpaywall)",
  
      articleAcceptedManuscriptArticleLinkViaUnpaywallEnabled: true,
      articleAcceptedManuscriptArticleLinkViaUnpaywallText: "Read Article (Accepted Manuscript via Unpaywall)"
    };
  
    browzine.script = document.createElement("script");
    browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
    document.head.appendChild(browzine.script);
  
    app.controller('prmSearchResultAvailabilityLineAfterAppStoreGeneratedControllerAppStoreGeneratedAppStoreGenerated', function($scope) {
      this.$onInit = function(){
        {
          window.browzine.primo.searchResult($scope);
        }
      };
    });
  
    app.component('prmSearchResultAvailabilityLineAfterAppStoreGenerated', {
      bindings: { parentCtrl: '<' },
      controller: 'prmSearchResultAvailabilityLineAfterAppStoreGeneratedControllerAppStoreGeneratedAppStoreGenerated'
    });
    // ... End BrowZine - Primo Integration
  
  
    /*----------below is the code for LibraryH3lp-----------*/
    var needsJs = document.createElement('div');
    needsJs.setAttribute('class', 'needs-js');
    var closeChatButton = document.createElement('button');
    closeChatButton.innerHTML = '☓';
    closeChatButton.setAttribute('style', 'border: 0 none; background: #f5f7fa; font-size: 16px; position: absolute; padding: 5px; right: -5px; top: -15px; border-radius: 50%; width: 30px; font-weight: bold;');
    var chatFrameWrap = document.createElement('div');
    chatFrameWrap.setAttribute('id', 'chat-frame-wrap');
    chatFrameWrap.setAttribute('style', 'display: none; width: 280px; background-color: #f5f5f5; padding: 0; box-shadow: -5px -5px 20px 5px rgba(0, 0, 0, 0.3); position: fixed; bottom: 0; right: 10px; border: 0 none; z-index: 200;');
    chatFrameWrap.appendChild(closeChatButton);
    chatFrameWrap.appendChild(needsJs);
    
    var chatButton = document.createElement('button');
    chatButton.innerHTML = 'Chat';
    chatButton.setAttribute('class', 'h3lp')
    chatButton.style.transform = 'rotate(90deg)';
    
    var showChat = false;
    function toggleChat() {
      chatFrameWrap.style.display = showChat ? 'none' : 'block';
      showChat = !showChat;
    }
    closeChatButton.addEventListener('click', toggleChat);
    closeChatButton.addEventListener('touchend', toggleChat);
    chatButton.addEventListener('click', toggleChat);
    chatButton.addEventListener('touchend', toggleChat);
    
    var chatWidget = document.createElement('aside');
    chatWidget.setAttribute('tabindex', '-1');
    chatWidget.setAttribute('style', 'display: block;');
    chatWidget.appendChild(chatButton);
    chatWidget.appendChild(chatFrameWrap);
    document.body.appendChild(chatWidget);
    
    var s = document.createElement('script');
    s.id = 'localScript';
    s.src = 'https://libraryh3lp.com/js/libraryh3lp.js?19250';
    document.body.appendChild(s);
    /*---------------LibraryH3lp code ends here---------------*/

    // component to activate search when search scope changed per the Search It Working Group suggesstion
    // see for more information: https://developers.exlibrisgroup.com/blog/automatically-activate-a-search-after-changing-search-scope/
    // Modified to change the place-holder text for the `Course Reserves` search scope -- 18/01/2024
    app.component('prmTabsAndScopesSelectorAfter', { 
      bindings: {
      parentCtrl: '<'
      },
      controller: function($scope) {
      this.$onInit = function() {
        {
          setTimeout(function() {
            function activateSearch() {
              setTimeout(function() {
                document.getElementsByClassName("zero-margin button-confirm md-button md-primoExplore-theme")[0].click()
              }, 500)
            }                               
            var searchScopes = document.querySelectorAll('[id^="select_option_"]')
            for (var i = 0; i < searchScopes.length; i++) {
              searchScopes[i].addEventListener('click', function() {
                activateSearch();
                // Change placeholder text based on the text content of the clicked <md-option>
                var clickedSearchScopeText = this.innerText;
                if (clickedSearchScopeText === 'Course Reserves') {
                  document.getElementById('searchBar').setAttribute('placeholder', 'Search by title, instructor or course code (e.g., ENGL 100)');
                } else {
                  document.getElementById('searchBar').setAttribute('placeholder', 'Search anything');
                }
                // Add more conditions here for other search scopes
              });
            }               
          }, 500)
        }
      };
      }               
     });
    
    // ... End: Auto search when change search scope
  
     
  })();
  
  //Auto generated code by primo app store DO NOT DELETE!!! -START-
  /*
      hookName is a place holder with should hold the hook name not including "prm" at the beginning and in upper camel case
      e.g: for hook prmSearchBarAfter (in html prm-search-bar-after) it should be given "SearchBarAfter"
   */
  app.controller('FacetAfterController', [function() {
    var vm = this;

    this.$onInit = function(){
      {}
    };
  }]);
  
  app.component('prmFacetAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'FacetAfterController',
    template: '\n    <prm-facet-after-app-store-generated parent-ctrl="$ctrl.parentCtrl"></prm-facet-after-app-store-generated>\n'
  
  });
  
  //Auto generated code by primo app store DO NOT DELETE!!! -END-
  
  //Auto generated code by primo app store DO NOT DELETE!!! -START-
  /*
      hookName is a place holder with should hold the hook name not including "prm" at the beginning and in upper camel case
      e.g: for hook prmSearchBarAfter (in html prm-search-bar-after) it should be given "SearchBarAfter"
   */
  app.controller('FacetExactAfterController', [function() {
    var vm = this;

    this.$onInit = function(){
      {}
    };
  }]);
  
  app.component('prmFacetExactAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'FacetExactAfterController',
    template: '\n    <prm-facet-exact-after-app-store-generated parent-ctrl="$ctrl.parentCtrl"></prm-facet-exact-after-app-store-generated>\n'
  
  });
  
  //Auto generated code by primo app store DO NOT DELETE!!! -END-
  
  //Auto generated code by primo app store DO NOT DELETE!!! -START-
  /*
      hookName is a place holder with should hold the hook name not including "prm" at the beginning and in upper camel case
      e.g: for hook prmSearchBarAfter (in html prm-search-bar-after) it should be given "SearchBarAfter"
   */
  app.controller('LocationItemsAfterController', [function() {
    var vm = this;

    this.$onInit = function(){
      {}
    };
  }]);
  
  app.component('prmLocationItemsAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'LocationItemsAfterController',
    template: '\n    <prm-location-items-after-app-store-generated parent-ctrl="$ctrl.parentCtrl"></prm-location-items-after-app-store-generated>\n'
  
  });
  
  //Auto generated code by primo app store DO NOT DELETE!!! -END-
  
  //Auto generated code by primo app store DO NOT DELETE!!! -START-
  /*
      hookName is a place holder with should hold the hook name not including "prm" at the beginning and in upper camel case
      e.g: for hook prmSearchBarAfter (in html prm-search-bar-after) it should be given "SearchBarAfter"
   */
  app.controller('PageNavMenuAfterController', [function() {
    var vm = this;

    this.$onInit = function(){
      {}
    };
  }]);
  
  app.component('prmPageNavMenuAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'PageNavMenuAfterController',
    template: '\n    <prm-page-nav-menu-after-app-store-generated parent-ctrl="$ctrl.parentCtrl"></prm-page-nav-menu-after-app-store-generated>\n'
  
  });
  
  //Auto generated code by primo app store DO NOT DELETE!!! -END-
  
  //Auto generated code by primo app store DO NOT DELETE!!! -START-
  /*
      hookName is a place holder with should hold the hook name not including "prm" at the beginning and in upper camel case
      e.g: for hook prmSearchBarAfter (in html prm-search-bar-after) it should be given "SearchBarAfter"
   */
  app.controller('SearchBarAfterController', [function() {
    var vm = this;

    this.$onInit = function(){
      {}
    };
  }]);
  
  app.component('prmSearchBarAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'SearchBarAfterController',
    template: '\n    <prm-search-bar-after-app-store-generated parent-ctrl="$ctrl.parentCtrl"></prm-search-bar-after-app-store-generated>\n'
  
  });
  
  //Auto generated code by primo app store DO NOT DELETE!!! -END-
  
  //Auto generated code by primo app store DO NOT DELETE!!! -START-
  /*
      hookName is a place holder with should hold the hook name not including "prm" at the beginning and in upper camel case
      e.g: for hook prmSearchBarAfter (in html prm-search-bar-after) it should be given "SearchBarAfter"
   */
  app.controller('SearchResultAvailabilityLineAfterController', [function() {
    var vm = this;

    this.$onInit = function(){
      {}
    };
  }]);
  
  app.component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'SearchResultAvailabilityLineAfterController',
    template: '\n    <prm-search-result-availability-line-after-app-store-generated parent-ctrl="$ctrl.parentCtrl"></prm-search-result-availability-line-after-app-store-generated>\n'
  
  });
  
  //Auto generated code by primo app store DO NOT DELETE!!! -END-
  })();