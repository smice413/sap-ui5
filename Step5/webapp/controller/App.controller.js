sap.ui.define([
    "sap/ui/core/mvc/Controller"
 ], function (Controller) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
       onShowHello : function () {
          // show a native JavaScript alert
          alert("Hello World");
       }
    });
 });

 // Controller 객체가 생성되고, extend 메소드를 통해 첫 매개변수에 컨트롤러의 이름(즉,파일 경로: controller폴더네 App파일)을 적고,
 // 두번째 매개변수에 button클릭시 실행되는 함수인 onShowHello를 정의 한다. 이 정의한 것을 view의 onShowHello트리거로 리턴한다.