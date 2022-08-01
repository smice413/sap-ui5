/*global QUnit, opaTest*/

sap.ui.define([
	"sap/ui/demo/walkthrough/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/App"
], function (mockserver) {
	"use strict";

	QUnit.module("Navigation");

	opaTest("Should open the Hello dialog", function (Given, When, Then) {
		// initialize the mock server
		mockserver.init();

		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "sap.ui.demo.walkthrough"
			}
		});

		//Actions
		When.onTheAppPage.iPressTheSayHelloWithDialogButton();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheHelloDialog();

		// Cleanup
		Then.iTeardownMyApp();
	});
});

// App과의 상호 작용을 테스트를 위해 Dialog기능이 들어가 있는 Say Hello 버튼을 클릭하면 열리는 지 확인한다.
// JavaScript 및 QUnit을 기반으로 쉽게 설정되어있는 OPA5를 사용하면 이 작업을 쉽게 수행 할 수 있다.
// 통합 및 unit test를 사용하면 CI (Continuous Integration) 환경에서 일관성(consistently)을 유지할 수 있다.

// Journey는 App navigationPages/Panel과 같이 통합 테스트로 구성된다.
// OPA5는 QUnit을 사용하므로 결과 페이지에 QUnit 모듈의 Navigation을 설정한다.
// opaTest 함수는 OPA와의 통합 테스트를 정의한다.
// 이 함수의 매개 변수는 테스트 이름과 callback함수이다.

// Given : 주어진 객체에서 iStartMyAppInAFrame을 호출하여 통합 테스트를 위해 별도의 iFrame에 App을 로드 한다.

// When : 예상되는 동작을 테스트 할 수 있는 상태에서 응용 프로그램을 가져올 수 있는 custom action을 수행한다.

// Then : 응용 프로그램의 특정 위치를 확인하고 iFrame을 제거하는 custom assertion이 있다.

// 이 방법은 Behavior Driven Development(BDD)라고하며 Agile Software Development에서 널리 사용된다.