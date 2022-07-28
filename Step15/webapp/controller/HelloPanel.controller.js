sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function(Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel" , {
        onShowHello : function () {
            // resd msg from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // show message
            MessageToast.show(sMsg);
        }
    });
});

// HelloPanel.view.xml에 controllerName에 작성한 것과 같이 extend에도 작성하여 함수가 정의되어 리턴 되도록 한다.
// 따라서 App.controller.js에 작성된 onShowHello는 삭제하고 함수가 없는 빈 상태인 stub 상태로 둔다.