sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
   //   onInit : function () {
   //       // set data model on view
   //       var oData = {
   //          recipient : {
   //             name : "World"
   //          }
   //       };
   //       var oModel = new JSONModel(oData);
   //       this.getView().setModel(oModel);
   //       // set i18n model on view
   //       var i18nModel = new ResourceModel({
   //          bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
   //       });
   //       this.getView().setModel(i18nModel, "i18n");
   //    },
      onShowHello : function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/recipient/name");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // var sMsg = oBundle.getText("helloMsg", [0,sRecipient]);
         // show message
         MessageToast.show(sMsg);
      }
   });
});
 // sap.ui.define : 해당 controller에 global 변수로 [object]를 사용하고자 할 때 [namespace]를 할당하여 사용한다.
 // sap.ui.require: 해당 controller에서 1회성으로 그냥 사용하고자 할 때 [namespace]사용없이 사용한다.
 // Controller 객체가 생성되고, extend 메소드를 통해 첫 매개변수에 컨트롤러의 이름(즉,파일 경로: controller폴더네 App파일)을 적고,
 // 두번째 매개변수에 button클릭시 실행되는 함수인 onShowHello를 정의 한다. 이 정의한 것을 view의 onShowHello트리거로 리턴한다.
 // 두번째 매개변수에 onInit 함수도 정의한다. onInit은 컨트롤러 생성시 프레임 워크에서 호출하는 SAPUI5의 라이프 사이클 메소드 중 하나이며 컨트롤의 생성자 함수와 유사하다.
 // JSON모델을 인스턴스화 하고 JSON모델에 넣을 값을 oData에 저장하고 JSONModel객체의 매개변수에 넣어 oModel이라는 변수에 대입하고,
 // XML view 내에서 이 모델을 사용하기 위해 setModel()함수를 호출하고 getView()를 통해 전달하면 모델이 뷰에 설정된다. 따라서 App.view.xml파일에 JSON모델의 데이터가 바인딩 될 수 있는 것.

 // i18n.properies파일(리소스 번들)을 가리키는(bundleName: "sap.ui.demo.walkthrough.i18n.i18n" ) ResourceModel를 객체화한다. 그 객체로 i18nModel이 선언되고, 이것을 "i18n"이라고 명명한 모델이름으로
 // view에 설정한다.

 // onShowHello 함수 정의
 // 리소스 번들은 ResourceModel의 getResourceBundle()메소드로 접근 가능. 그리고 i18n으로 명명한 모델을 뷰에 설정. 
 // 그리고 ResourceBundle의 getText()메소드를 통해 텍스트를 수동으로 연결하는 대신 getText의 두 번째 매개 변수(sRecipient)를 사용하여 텍스트의 일부를 동적으로 바꿀 수 있다. 
 // getText(sKey, aArgs?, bIgnoreKeyFallback?) : sKey는 텍스트를 가져올 키, aArgs? 는 찾은 문자열 값에서 자리표시자"{n}"(n은 인덱스)을 대체해야 하는 매개변수 값 목록, 
                                              // bIgnoreKeyFallback?는 설정하면 번들이나 대체 번들에서 키를 찾을 수 없을 때 키 문자열 대신 undefined가 반환됨.
 // ResourceModel의 getProperty() 메소드는 지정된 경로의 속성 값을 반환한다.
 // 따라서 i18n 모델이 뷰에 설정된 것+ ResourceModel에 "/recipient/name" 경로 상 값을 반환받고+ i18n.properties파일의 helloMsg 키를 getText()의 첫번째 매개변수에 넣고, ResourceModel에 들어간 값을
 // 배열에 넣어, {0}이 호출한 배열 0번 인덱스 값이 출력됨.

 // module은 sapui5에서 설정이 없어도 동작할 수 있는 독립된 기능구현 class object를 말한다. 이는 controller에 등록하여 그때 그때 호출하며 사용한다. ex) MessageToast
 // 여기서 MessageToast 라이브러리를 객체로 생성하고 alert()대신 MessageToast.show();를 사용함.

