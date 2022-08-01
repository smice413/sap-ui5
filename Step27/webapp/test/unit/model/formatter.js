/*global QUnit*/

sap.ui.define([
	"sap/ui/demo/walkthrough/model/formatter",
	"sap/ui/model/resource/ResourceModel"
], function (formatter, ResourceModel) {
	"use strict";

	QUnit.module("Formatting functions", {
		beforeEach: function () {
			this._oResourceModel = new ResourceModel({
				bundleUrl: sap.ui.require.toUrl("sap/ui/demo/walkthrough") + "/i18n/i18n.properties"
			});
		},
		afterEach: function () {
			this._oResourceModel.destroy();
		}
	});


	QUnit.test("Should return the translated texts", function (assert) {
		console.log(assert);
		// Arrange
		// this.stub() does not support chaining and always returns the right data
		// even if a wrong or empty parameter is passed.
		var oModel = this.stub();
		oModel.withArgs("i18n").returns(this._oResourceModel);
		var oViewStub = {
			getModel: oModel
		};
		var oControllerStub = {
			getView: this.stub().returns(oViewStub)
		};

		// System under test
		var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);

		// Assert
		assert.strictEqual(fnIsolatedFormatter("A"), "New", "The long text for status A is correct");

		assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The long text for status B is correct");

		assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The long text for status C is correct");

		assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for status Foo is correct");
	});

});

// QUnit.module("테스트하는 그룹의 이름", 콜백받는 곳, 함수)
// beforeEach 함수는 각 테스트 이전에 콜백받는 함수
// afterEach 함수는 각 테스트 이후에 콜백 받음
// before 함수는 첫 테스트 이전에 콜백
// after 함수는 마지막 테스트 이후 콜백

// beforeEach 함수로 i18n에 있는 Text를 ResourceBundle로 읽고 테스트 시작.
// controller, view, model 기능은 테스트하고 싶지 않으므로 먼저 SinonJS 및 stub method를 사용한다.
// 단위 테스트를 할대 SinonJS는 모든 객체에 대해 this.stub ()를 사용하여 모의 테스트할 동작에 대해 새로운 스텁을 만든다.

//stub.withArgs()는 메소드 안에 인수만을 대상으로 스텁 메소드 사용한다.
// formatter.statusText에 oControllerStub을 바인딩 한다. 그것을 fnIsolatedFormatter 변수로 만들고,
// .strictEqual()메소드로 (테스트중인 표현식, 알려진 비교값, 실제표현에 대한 간략한 설명 )을 작성하여 assert 즉, i18n에서 번역된 Text값과 stub()메소드로 바인딩시킨 값과 비교한다.