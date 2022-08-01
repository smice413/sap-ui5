sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
			
		},
		_onObjectMatched: function (oEvent) {
			console.log(oEvent);
			//console.log(oEvent.getParameter("arguments").invoicePath);
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoice"
			});
		}
	});
});
// .attachPatternMatched(this._onObjctMatched, this)는 router의 detail항목에 attchPatternMatched 메소드를 호출해 추가정보를 연결한다.
//oEvent.getParameter("arguments") 는 router를 인스턴스화 하고 patten이 detail이고 invoicePath: 로 세부사항까지 적용된 uri를 가져온다.