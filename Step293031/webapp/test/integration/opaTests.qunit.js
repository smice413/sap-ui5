/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/ui/demo/walkthrough/test/integration/NavigationJourney"
	], function () {
		QUnit.start();
	});
});

// sap.ui.getCore()를 호출하여 SAPUI5 코어를 참조하고, core에서 attachInit(…)를 호출하여 init 이벤트에 대한 익명 콜백 함수를 등록합니다. 
// SAP UI5에서는 이러한 종류의 콜백 함수를 event handler, event listener functions 또는 simply listeners 라고 합니다. core는 singleton이며 코드의 어디에서나 액세스할 수 있습니다.
// SAP UI5의 부트스트랩이 완료되고 기본 JavaScript 알림이 표시될 때 콜백 함수가 실행됩니다.