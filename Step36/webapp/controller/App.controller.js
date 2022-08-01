// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast",
//     "sap/ui/model/json/JSONModel",
//     "sap/ui/model/resource/ResourceModel"
//  ], function (Controller, MessageToast, JSONModel, ResourceModel) {
//     "use strict";
//     return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
//        onInit : function () {
//           // set data model on view
//           var oData = {
//              recipient : {name : "World"}
//           };
//           var oModel = new JSONModel(oData);
//           this.getView().setModel(oModel);
//           // set i18n model on view
//           var i18nModel = new ResourceModel({
//               bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
//           });
//           this.getView().setModel(i18nModel, "i18n");

//        },
//        onShowHello : function () {
//         //   MessageToast.show("Hello World");
//         // read msg from i18n model
//         var oBundle = this.getView().getModel("i18n").getResourceBundle();
//         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
//         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
//         // show message
//         MessageToast.show(sMsg);

//        }
//     });
//  });

// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast"
//  ], function (Controller, MessageToast) {
//     "use strict";
//     return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
//        onShowHello : function () {
//           // read msg from i18n model
//           var oBundle = this.getView().getModel("i18n").getResourceBundle();
//           var sRecipient = this.getView().getModel().getProperty("/recipient/name");
//           var sMsg = oBundle.getText("helloMsg", [sRecipient]);
//           // show message
//           MessageToast.show(sMsg);
//        }
//     });
//  });
sap.ui.define([
   "sap/ui/core/mvc/Controller"
], function (Controller) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

      onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		}
   });
});


//getOwnerComponent():
//컨트롤러 뷰의 구성 요소를 가져옵니다.
//뷰에 연결된 Component가 없거나 컨트롤러에 뷰가 연결되어 있지 않으면 undefined가 반환됩니다.
