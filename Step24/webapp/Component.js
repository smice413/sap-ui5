sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    //"sap/ui/model/resource/ResourceModel"
 ], function (UIComponent, JSONModel) {
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
 
           // set i18n model 이제는 manifest.json에서 담당
         //   var i18nModel = new ResourceModel({
         //      bundleName : "sap.ui.demo.walkthrough.i18n.i18n"
         //   });
         //   this.setModel(i18nModel, "i18n");
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

//--------manifest.json 파일에 대한 설명------------------------------------------------------------------------------------------------------------------------

// 모든 application별 구성 설정은 manifest.json이라는 별도의 설명 파일에 추가됩니다. 
// 구성 설정으로부터 application 코딩이 완전히 분리되고 app을 좀더 유연하게 만들어 줍니다. 
// 예를 들어 모든 SAP Fiori application은 component들로 구현되고 SAP Fiori 런치패드에서 호스팅 되기 위해 설명 파일(manifest.json)은 제공합니다.


// **SAP Fiori 런치패드는 application 컨테이너 역할을 하며 bootstrap으로 로컬 HTML 파일없이 app을 인스턴스화합니다. 
// 대신에 설명 파일이 파싱되고 component는 현재 HTML 페이지에 로딩됩니다. 동일 컨텍스트에서 몇개의 app이 표시되도록 합니다. 
// 각각의 app은 언어 properties, 지원 기기등과 같이 로컬 설정에 정의할 수 있습니다. 
// 또한 추가 resources를 로드하고 i18n resource bundle같은 모델을 인스턴스화 하기 위해 설명파일(manifest.json)을 사용할 수 있습니다.


// manifest.json(설명 파일) 파일의 내용은 모든 전역 application 설정과 파라미터를 가지고 있는 JSON 포맷의 구성 객체입니다.
// manifest 파일은 application, component, 라이브러리를 위한 descriptor이고 application을 사용할 때 "descriptor", "app descriptor"라고도 합니다. 
// webapp 폴더에 위치하고 component를 인스턴스화하기 위해 SAPUI5에 의해 읽혀집니다. 
// manifest.json 파일은 네임스페이스로 정의되는 3가지 중요한 섹션이 있습니다.

// *sap.app
// sap.app 네임스페이스는 다음과 같은 application별 속성을 가지고 있습니다.
// - Id(필수): application component의 네임스페이스  ID는 70자를 넘지 않아야 합니다. 고유해야 하고 component ID/네임스페이스에 해당되야 합니다.
// - type: 구성하려는 것을 정의합니다: application
// - i18n: resource bundle 파일을 정의합니다.
// - title: handlebars 구문에서 application의 타이틀은 app의 resource bundle을 참조합니다.
// - description: handlebars 구문에서 application이 실행하는 간단한 설명 텍스트는 app의 resource bundle을 참조합니다.
// - applicationVersion: 최신의 application으로 쉽게 업데이트할 수 있는 application 버전

// *sap.ui
// sap.ui 네임스페이스는 다음과 같은 UI별 속성을 제공합니다.
// - technology: 이 값은 UI 기술을 정의합니다: 이 경우 SAPUI를 사용합니다.
// - deviceTypes: app이 지원하는 기기를 정의합니다: desktop, tablet, phone(기본값은 모두 true)

// *sap.ui5
// sap.ui5 네임스페이스는 SAPUI5에 의해 자동으로 처리되는 SAPUI5관련 설정 파라미터를 추가합니다. 가장 중요한 파라미터는 다음과 같습니다.

// - rootView: 만약 이 파라미터를 정의하면 component는 자동으로 view를 인스턴스화하고 이 구성을 root로 사용합니다.

// - dependencies: application에서 사용하는 UI 라이브러리들은 선언합니다.

// - models: descriptor의 이 부분은 app이 시작될 때 SAPUI5에 의해 자동으로 인스턴스화하는 모델들을 정의할 수 있습니다. 
// 로컬 resource bundle을 정의할 수 있습니다 모델 "i18n"의 이름을 키로 정의하고 네임스페이스에 의해 bundle 파일로 지정합니다. 
// 이전 스텝에서와 같이 번역된 텍스트들이 있는 파일은 i18n 폴더에 위치하고 i18n.properties로 네이밍합니다. 
// app의 네임스페이스룰 파일의 경로 앞에 접두어로 붙입니다. app component의 init 메소드에서 manual 인스턴스화는 이 단계의 뒷부분에서 제거할 겁니다.

// - 호환성을 위해 root 객체와 각 섹션은 내부 속성 _version에 descriptor 버전 번호 1.1.0을 명시합니다. 
// 기능들은 미래 descriptor 버전에서 추가되거나 변경될 수 있습니다. 버전 번호는 descriptor를 읽어드리는 툴에 의해 application 설정을 식별하는데 도움을 줍니다.

// **resource bundle의 property들은 descriptor에서 두개의 중괄호로 묶입니다. 
// SAPUI5 데이터 바인딩 구문이 아니라 handlebars 구문의 descriptor에서 resource bundle에 대한 변수 참조입니다.
// 참조된 텍스트들은 이 튜토리얼에서 작성된 app에서는 표시되지 않지만 SAP Fiori 런치패드 같은 application 컨테이너에서 읽을 수 있습니다.

