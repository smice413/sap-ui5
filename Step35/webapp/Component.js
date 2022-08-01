sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
 ], function (UIComponent, JSONModel, Device) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
       metadata : {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],  
         manifest: "json"
       },
       init : function () {
          // call the init function of the parent
          UIComponent.prototype.init.apply(this, arguments);
          // set data model
          var oData = {
             recipient : {
                name : "World"
             }
          };
          var oModel = new JSONModel(oData);
          this.setModel(oModel);

          // set device model
          //장치 모델이 읽기 전용이므로 바인딩 모드를 OneWay로 설정해야 하며 컨트롤의 속성을 바인딩할 때 모델이 실수로 변경되는 것을 방지하고 싶습니다. 
          //기본적으로 SAPUI5의 모델은 양방향( TwoWay)입니다. 속성이 변경되면 바인딩된 모델 값도 업데이트됩니다.
          var oDeviceModel = new JSONModel(Device);
          oDeviceModel.setDefaultBindingMode("OneWay");
          this.setModel(oDeviceModel, "device");

          // create the views based on the url/hash
          var url=this.getRouter().initialize();
          alert(url);
          
       }
    });
 });