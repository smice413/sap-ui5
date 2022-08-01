sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/core/syncStyleClass"
], function (Cotroller, MessageToast, syncStyleClass) {
        "use strict";

        return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
            onShowHello : function () {
                //read msgt from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("hellopMsg", [sRecipient]);
                // show message
                MessageToast.show(sMsg);
            
            },

            onOpenDialog : function () {
                var oView = this.getView();
                
                if(!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name : "sap.ui.demo.walkthrough.view.HelloDialog"
                    }).then(function (oDialog){
                        //forward compact/cozy style into dialog
                        console.log(this.getOwnerComponent().getContentDensityClass());
                        syncStyleClass(this.getOwnerComponent().getContentDensityClass(), this.getView(), oDialog);
                        return oDialog;
                    }.bind(this));
                }
                this.pDialog.then(function(oDialog){
                    oDialog.open();
                });
            },

            onCloseDialog : function() {
                // note : we don't need to chain to the pDialog promise, snice this event-handler
                // is only called from within the loaded dialog itself.
                this.byId("helloDialog").close();
            }
                
        });
});