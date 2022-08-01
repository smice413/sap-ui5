sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
], function (Opa5, Press) {
	"use strict";

	var sViewName = "sap.ui.demo.walkthrough.view.HelloPanel";

	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iPressTheSayHelloWithDialogButton: function () {
					return this.waitFor({
						id: "helloDialogButton",
						viewName: sViewName,
						actions: new Press(),
						errorMessage: "Did not find the 'Say Hello With Dialog' button on the HelloPanel view"
					});
				}
			},

			assertions: {
				iShouldSeeTheHelloDialog: function () {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success: function () {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "The dialog is open");
						},
						errorMessage: "Did not find the dialog control"
					});
				}
			}
		}
	});
});

// createPageObejcts함수를 이용하여 페이지 객체를 정의함.
// onTheAppPage의 key와 action과 assertion 두 섹션으로 객체를 전달.
// sap.m.Button 유형의 컨트롤을 검사하는 waitFor문을 정의한다.
// 조건이 충족(App페이지에서 Button을 찾는 것)되면 callback이 실행되 handler가 실행되고 아니면 에러메세지가 표시된다.
// assertion 섹션에서 sap.m.Dialog 컨트롤이 App의 DOM에 존재하는지 확인하는 waitFor를 정의한다.
// Dialog가 발견되면 테스트 성공적으로 완료되며 ok문을 호출하여 즉시 확인할 수 있다.