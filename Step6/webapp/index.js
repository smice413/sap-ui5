sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	
	"use strict";

	XMLView.create({
		viewName: "sap.ui.demo.walkthrough.view.App"
		
	}).then(function (oView) {
		oView.placeAt("content");
	});

});

// index.js 스크립트는 보안상의 이유로 HTML 파일에 직접 실행 코드가 저장되는 것을 피하기 위해 만든다.
// 이 스크립트는 index.html에 data-sap-ui-onInit 의해 호출된다.

// index.js(XMLView 컨트롤)에서 화면의 일부 모양과 동작을 정의(sap.ui.define)한다. onInit즉, init 이벤트의 콜백은 XMLView 컨트롤을 인스턴스화(즉, 객체 생성)하는 곳이다.
// 컨트롤 이름에는 컨트롤 library인 sap/ui/core/mvc 의 namespace가 접두어로 붙어 있으며 옵션은 javascript 객체로 생성자에 전달된다.

// sap.m.Text 컨트롤의 인스턴스를 App xml view로 대체한다.
// index.html에 data-sap-ui-resourceroots 설정한 namespace를 기준으로
// 이 자원을 고유하게 식별하기 위해 이름 앞에 sap.ui.demo.walkthrough.view로 namespace가 붙는다.


// XMLView.create({}) 메소드 : view.xml 파일만 불러오므로, viewName 의 파일 확장자를 굳이 써주지 않는다.
// 지정된 구성 옵션에서 XMLView를 인스턴스화합니다.
// viewName이 제공되면 XML view resource 의 점으로 구분된 이름이어야 합니다(필수 접미사 ".view.xml" 제외). 
// 리소스는 모듈 시스템을 통해 비동기식으로 로드되며(사전 로드 캐시가 적용될 수 있음) XML로 구문 분석됩니다. 
// 또는 이미 로드된 뷰 정의를 XML 문자열 또는 이미 구문 분석된 XML 문서로 제공할 수 있습니다. 
// viewName 또는 definition 중 하나만 지정해야 하며, 지정하지 않거나 둘 다 지정하지 않으면 오류가 보고됩니다.
// 컨트롤러 속성은 선택 사항이며 컨트롤러 인스턴스를 보유할 수 있습니다. 주어진 경우 뷰 정의에 정의된 컨트롤러 클래스를 재정의합니다.

// 참고: 루트 수준에서는 기본 집계에 대한 콘텐츠만 정의할 수 있습니다. <content> 태그를 추가하지 않고. 
// 종속 항목과 같은 보기의 다른 집계에 대한 콘텐츠를 지정하려면 자식 컨트롤의 종속 집계에 배치하거나 sap.ui.core.mvc.XMLView#addDependent를 사용하여 추가합니다.
// 참고: 캐싱을 활성화하면 키를 통한 무효화를 처리해야 합니다. 자동 무효화는 UI5 버전 또는 구성 요소 설명자(manifest.json)가 변경된 경우에만 발생합니다. 
// 이것은 아직 실험적인 기능이며 무효화 매개변수 또는 캐시 키 형식이 약간 변경될 수 있습니다.

//.then(function(oView) {})에서 oView는 바로 앞에서 생성해준 것을 인자로 받는다. 즉, viewname에서 파일 경로를 써주면 그것을 인자로 받고, 
// oView.palceAt("content")를 실행 즉, #("content").append(oView)와 같다. id가 content인 것에 oView에 있는 인자를 나타내라는 의미

// 흐름: index.html-onInit으로 index.js 실행-define으로 XMLView 객체화-function의 매개변수로 객체가 지정되고-XMLView의 create()메소드 실행-viewName에 실행할 파일경로 지정-
// App.view.xml실행-Text태그의 속성 값이 index.js의 .then(function)의 매개변수인 oView로 콜백됨. oVeiw를 id가 content인 index.html파일의 body태그에서 출력됨.

// use strict(엄격 모드)는 평범한 JavaScript 시멘틱스에 몇가지 변경이 일어나게 합니다. 이는 브라우저의 sloppy mode(느슨한 모드)를 해제하기 위한 방법이다.
// 기존에는 조용히 무시되던 에러들을 throwing합니다.
// JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다. 가끔씩 엄격 모드의 코드는 비-엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
// 엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지합니다.

