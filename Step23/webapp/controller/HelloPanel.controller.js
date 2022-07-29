sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function(Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel" , {
        onShowHello : function () {
            // resd msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // show message
            MessageToast.show(sMsg);
        },
		onOpenDialog : function () {

			// create dialog lazily
			if (!this.pDialog) {
				this.pDialog = this.loadFragment({
					name: "sap.ui.demo.walkthrough.view.HelloDialog"
				});
			} 
            
			this.pDialog.then(function(oDialog) {
                
				oDialog.open();
			});
		},
        onCloseDialog : function() {
            this.byId("helloDialog").close();
        }


    });
});

// HelloPanel.view.xml에 controllerName에 작성한 것과 같이 extend에도 작성하여 함수가 정의되어 리턴 되도록 한다.
// 따라서 App.controller.js에 작성된 onShowHello는 삭제하고 함수가 없는 빈 상태인 stub 상태로 둔다.
// fragment에 dialog는 아직 존재하지 않으면 fragment는 sap.ui.xmlfragment 메소드를 호출해 인스턴스화 한다.