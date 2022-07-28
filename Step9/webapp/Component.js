sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
 ], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";
    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
       metadata : {
          rootView: {
             "viewName": "sap.ui.demo.walkthrough.view.App",
             "type": "XML",
             "async": true,
             "id": "app"
          }
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
 
           // set i18n model
           var i18nModel = new ResourceModel({
              bundleName : "sap.ui.demo.walkthrough.i18n.i18n"
           });
           this.setModel(i18nModel, "i18n");
        }
    });
 });

//  ** 이 단계에서는 모든 UI assets(자산)을 index.html 파일과 독립적인 컴포넌트에  캡슐화 합니다. 
//  컴포넌트들은 SAPUI5 application에서 사용되는 독립적이고 재사용이 가능한 'parts'입니다. 
//  resources에 접근할 때마다 index.html  대신에 컴포넌트에 상대적으로 수행할 것입니다. 
//  이러한 구조적 변화는 SAP Fiori 런치패드와 같은 전방위적 컨테이너와 같이 정적인 index.html보다 좀 더 유연한 환경에서 app을 사용할 수 있도록 합니다. 


//   application 설정을 저장할 webapp 폴더에 Component.js 파일을 만듭니다.
//   root view는 기존에 index.js 파일에서 뷰를 인스턴스화 하는 대신 컴포넌트 컨테이너를 만들어 Component.js파일을 찾아 실행이 되게 하여 App view 표시를 관리하도록 합니다.
//   component 'init' 함수는 component가 초기화 될 때(즉, 객체화 될 때) SAPUI5에 의해 자동을 실행됩니다. 
//   init 함수에서 data model과 i18n 모델을 인스턴스화 합니다. 모델은 root view가 아닌 component에 직접 설정되고, 기존에 App.controller.js 파일의 oninit 함수는 삭제(주석처리)합니다.

//   component는 기본 클래스인 sap.ui.core.UIComponent부터 상속되고 오버라이드된 init 메소드에서 기본 클래스의 init 함수에 'super call'을 해야 합니다.

