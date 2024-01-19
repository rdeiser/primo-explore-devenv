(function(){
"use strict";
"use strict";

// START_primo-explore-custom-actions
insertActions([{
  name: "Report Problem",
  type: "template",
  icon: {
    set: 'action',
    name: 'ic_report_problem_24px'
  },
  action: "http://my.institution.edu/report_problem?record_id={recordId}"
}, {
  name: "My Link",
  icon: {
    set: 'action',
    name: 'ic_open_in_new_24px'
  },
  action: "http://google.com/"
}, {
  name: "Open PNX",
  type: 'template',
  icon: {
    set: 'action',
    name: 'ic_stars_24px'
  },
  action: "/primo_library/libweb/jqp/record/{pnx.control.recordid}.pnx"
}, {
  name: "My other link",
  type: 'template',
  templateVar: ['test', 'me'],
  icon: {
    set: 'action',
    name: 'ic_stars_24px'
  },
  action: "http://www.example.com/{0}/{1}"
}]);
// END_primo-explore-custom-actions
})();