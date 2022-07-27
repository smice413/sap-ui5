sap.ui.define([
	"sap/m/Text"

], function (Text) {	
	
	"use strict";

	new Text({
		text: "Hello World"
	}).placeAt("content");

});

// index.js 스크립트는 보안상의 이유로 HTML 파일에 직접 실행 코드가 저장되는 것을 피하기 위해 만든다.
// 이 스크립트는 index.html에 data-sap-ui-onInit 의해 호출된다.

// index.js(openUI5 컨트롤)에서 화면의 일부 모양과 동작을 정의(sap.ui.define)한다. onInit즉, init 이벤트의 콜백은 openUI5 텍스트 컨트롤을 인스턴스화하는 곳이다.
// 컨트롤 이름에는 컨트롤 library인 sap/m/의 namespace가 접두어로 붙어 있으며 옵션은 javascript 객체로 생성자에 전달된다.
// 텍스트의 속성을 sap/m/Text hello World 값으로 설정했다.
// placeAt : 컨트롤의 생성자 호출(new Text({}))을 문서 객체 모델(DOM) 또는 다른 OpenUI5 컨트롤 인스턴스의 노드 안에 OpenUI5 컨트롤을 배치하는 데 사용되는 표준 메서드
// 여기서 "문서 객체 모델(DOM) 또는 다른 OpenUI5 컨트롤 인스턴스의 노드 안"은 DOM 노드의 id를 인수로 전달(html 문서의 body 태그를 사용하고 그 안의 id를 쓰면됨)

// use strict(엄격 모드)는 평범한 JavaScript 시멘틱스에 몇가지 변경이 일어나게 합니다. 이는 브라우저의 sloppy mode(느슨한 모드)를 해제하기 위한 방법이다.
// 기존에는 조용히 무시되던 에러들을 throwing합니다.
// JavaScript 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로잡습니다. 가끔씩 엄격 모드의 코드는 비-엄격 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
// 엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법을 금지합니다.

