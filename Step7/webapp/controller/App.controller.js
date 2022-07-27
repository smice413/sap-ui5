sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast, JSONModel) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit : function () {
         // set data model on view
         var oData = {
            "recipient" : {
               "name" : "World"
            }
         };
         var oModel = new JSONModel(oData);
         this.getView().setModel(oModel);
      },
      onShowHello : function () {
         MessageToast.show("Hello World");
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
 // module은 sapui5에서 설정이 없어도 동작할 수 있는 독립된 기능구현 class object를 말한다. 이는 controller에 등록하여 그때 그때 호출하며 사용한다. ex) MessageToast
 // 여기서 MessageToast 라이브러리를 객체로 생성하고 alert()대신 MessageToast.show();를 사용함.