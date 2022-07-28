// sap.ui.define([
// 	"sap/ui/core/mvc/XMLView"
// ], function (XMLView) {
	
// 	"use strict";

// 	XMLView.create({
// 		viewName: "sap.ui.demo.walkthrough.view.App"
		
// 	}).then(function (oView) {
// 		oView.placeAt("content");
// 	});

// });

sap.ui.define([
	"sap/ui/core/ComponentContainer"
], function (ComponentContainer) {
	"use strict";

	new ComponentContainer({
		name: "sap.ui.demo.walkthrough",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});

// index.js 스크립트는 보안상의 이유로 HTML 파일에 직접 실행 코드가 저장되는 것을 피하기 위해 만든다.
// 이 스크립트는 index.html에 data-sap-ui-onInit 의해 호출된다.

// 컴포넌트를 사용하기 때문에 뷰를 인스턴스화 하는 대신 컴포넌트 컨테이너를 인스턴스화 하고, name(=namespace)에 따라 Component.js 파일을 검색해서 component를 인스턴스화 한다.
// 그래서 Component.js 파일에서 정의한 root View를 로드하고 App.view.xml이 호출되고 값을 리턴 받아 placeAt("content")에 따라 화면에 표시한다. 