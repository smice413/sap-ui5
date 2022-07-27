sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller, MessageToast) {
   
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello : function () {
         MessageToast.show("Hello World");
      }
   });
});
 // sap.ui.define : 해당 controller에 global 변수로 [object]를 사용하고자 할 때 [namespace]를 할당하여 사용한다.
 // sap.ui.require: 해당 controller에서 1회성으로 그냥 사용하고자 할 때 [namespace]사용없이 사용한다.
 // Controller 객체가 생성되고, extend 메소드를 통해 첫 매개변수에 컨트롤러의 이름(즉,파일 경로: controller폴더네 App파일)을 적고,
 // 두번째 매개변수에 button클릭시 실행되는 함수인 onShowHello를 정의 한다. 이 정의한 것을 view의 onShowHello트리거로 리턴한다.
 // module은 sapui5에서 설정이 없어도 동작할 수 있는 독립된 기능구현 class object를 말한다. 이는 controller에 등록하여 그때 그때 호출하며 사용한다. ex) MessageToast
 // 여기서 MessageToast 라이브러리를 객체로 생성하고 alert()대신 MessageToast.show();를 사용함.