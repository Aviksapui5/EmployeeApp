sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/sample/fioriemployeeapp/test/integration/pages/EmployeeSetList",
	"com/sample/fioriemployeeapp/test/integration/pages/EmployeeSetObjectPage"
], function (JourneyRunner, EmployeeSetList, EmployeeSetObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/sample/fioriemployeeapp') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeeSetList: EmployeeSetList,
			onTheEmployeeSetObjectPage: EmployeeSetObjectPage
        },
        async: true
    });

    return runner;
});

