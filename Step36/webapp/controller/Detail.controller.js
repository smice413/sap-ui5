sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function (Controller, History, MessageToast, JSONModel) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {
		onInit: function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");

			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
			
		},
		_onObjectMatched: function (oEvent) {
			//console.log(oEvent);
			//console.log(oEvent.getParameter("arguments").invoicePath);
			this.byId("rating").reset();
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
				model: "invoice"
			});
		},
		onNavBack: function () {
			var oHistory = History.getInstance(); 
			//sap.ui.core.routing.History가 필요한 즉시 생성되는 글로벌 싱글톤. 즉, History 객체 불러옴
			var sPreviousHash = oHistory.getPreviousHash(); 
			// .getPreviousHash() :기록의 이전 해시를 가져옵니다. 마지막 방향이 Unknown이거나 아직 탐색이 없는 경우 undefined가 반환됩니다.

			if(sPreviousHash !== undefined) {
				window.history.go(-1);
			}else{
				var oRouter = this.getOwnerComponent.getRouter();
				oRouter.navTo("overview" , {} , true);
				//overview는 route의 name값
				//두 번째 매개 변수는 이 route에 추가 매개 변수를 전달하지 않으므로 빈 배열 ({})이다.
				//navTo: true로 설정하면 해시가 대체되고 브라우저 기록에 항목이 없습니다. false로 설정하면 해시가 설정되고 항목이 브라우저 기록에 저장됩니다.
			}



		},
		onRatingChange: function (oEvent) {
			
			var fValue = oEvent.getParameter("value");
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

			MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
		}
	});
});
// .attachPatternMatched(this._onObjctMatched, this)는 router의 detail항목에 attchPatternMatched 메소드를 호출해 추가정보를 연결한다.
//oEvent.getParameter("arguments") 는 router를 인스턴스화 하고 patten이 detail이고 invoicePath: 로 세부사항까지 적용된 uri를 가져온다.