sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	"sap/m/Button"

], function (Control, RatingIndicator, Label, Button) {
	"use strict";
	return Control.extend("sap.ui.demo.walkthrough.control.ProductRating", {
		metadata : {
			properties : {
				value: 	{type : "float", defaultValue : 0}
			},
			aggregations : {
				_rating : {type : "sap.m.RatingIndicator", multiple: false, visibility : "hidden"},
				_label : {type : "sap.m.Label", multiple: false, visibility : "hidden"},
				_button : {type : "sap.m.Button", multiple: false, visibility : "hidden"}
			},
			events : {
				change : {
					parameters : {
						value : {type : "int"}
					}
				}
			}
		},
		init : function () {
			this.setAggregation("_rating", new RatingIndicator({
				value: this.getValue(),
				iconSize: "2rem",
				visualMode: "Half",
				liveChange: this._onRate.bind(this)
			}));
			this.setAggregation("_label", new Label({
				text: "{i18n>productRatingLabelInitial}"
			}).addStyleClass("sapUiSmallMargin"));
			this.setAggregation("_button", new Button({
				text: "{i18n>productRatingButton}",
				press: this._onSubmit.bind(this)
			}).addStyleClass("sapUiTinyMarginTopBottom"));
		},

		setValue: function (fValue) {
			this.setProperty("value", fValue, true);
			this.getAggregation("_rating").setValue(fValue);
		},

		reset: function () {
			var oResourceBundle = this.getModel("i18n").getResourceBundle();

			this.setValue(0);
			this.getAggregation("_label").setDesign("Standard");
			this.getAggregation("_rating").setEnabled(true);
			this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelInitial"));
			this.getAggregation("_button").setEnabled(true);
		},

		_onRate : function (oEvent) {
			var oRessourceBundle = this.getModel("i18n").getResourceBundle();
			var fValue = oEvent.getParameter("value");

			this.setProperty("value", fValue, true);

			this.getAggregation("_label").setText(oRessourceBundle.getText("productRatingLabelIndicator", [fValue, oEvent.getSource().getMaxValue()]));
			this.getAggregation("_label").setDesign("Bold");
		},

		_onSubmit : function (oEvent) {
			var oResourceBundle = this.getModel("i18n").getResourceBundle();

			this.getAggregation("_rating").setEnabled(false);
			this.getAggregation("_label").setText(oResourceBundle.getText("productRatingLabelFinal"));
			this.getAggregation("_button").setEnabled(false);
			this.fireEvent("change", {
				value: this.getValue()
			});
		},
		renderer : function (oRm, oControl) {
			oRm.openStart("div", oControl);
			oRm.class("myAppDemoWTProductRating");
			oRm.openEnd();
			oRm.renderControl(oControl.getAggregation("_rating"));
			oRm.renderControl(oControl.getAggregation("_label"));
			oRm.renderControl(oControl.getAggregation("_button"));
			oRm.close("div");
		}
	});
});

// Metadata

// Metadata section은 data structure control의 API를 정의한다.
// SAPUI5 컨트롤의 property, event 및 aggregation에 대한이 meta 정보를 사용하여
// setter 및 getter 메서드와 응용 프로그램 내에서 호출 할 수 있는 편리한 함수를 자동으로 만들어준다.

// Renderer

// renderer는 control이 view에서 instance화 될 때마다 App의 DOM tree에 추가되는 HTML 구조를 정의한다.
// 렌더 함수의 매개 변수 oRM은 문자열을 작성하고 HTML 페이지에 속성을 제어하는 데 사용할 수 있는 SAPUI5 render manager이다.

// init

// init 메서드는 control이 instance화 될 때마다 SAPUI5 core에서 호출되는 함수이다.
// 컨트롤을 설정하고 내용을 표시 할 준비를 하는데 사용할 수 있다.

// note:
// control은 항상 sap.ui.core.Control을 확장하고 자체 rendering을 한다.  
// Data binding을 포함하고 있고 Rendering되지 않은 Object에 대한 SAPUI5의 life cycle 특징을 재사용(상속받고자) 하는경우  
// sap.ui.core.Element 또는 sap.ui.base.ManagedObject를 직접 확장 할 수 있다.
