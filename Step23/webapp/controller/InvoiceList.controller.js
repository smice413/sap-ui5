sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter: formatter,
        onInit : function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        },
        onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}
    });
});

// SearchField태그에서 입력된 값이 oEvent매개변수로 넘어오면 getParameter메소드를 사용해 param이 query로 받는 방식으로 한다.
// 쿼리가 비어 있지 않으면 필터의 aFilter변수에 새 filter객체를 추가한다.
// 그러나 쿼리가 비어 있으면 빈 배열을 사용하여 바인딩을 필터링한다.
// 이렇게하면 모든 목록 요소를 다시 볼 수 있다.
// 둘 이상의 데이터 필드를 검색하려는 경우 배열에 필터를 더 추가 할 수도 있다.
// ProductName 경로를 검색하고 지정된 쿼리 문자열을 검색 할 필터 연산자를 지정한다.

// Control들은 view ID에 의해 자동으로 접두사가 붙기 때문에 view에 사용된 list는 지정된 ID로 액세스 할 수 있다.
// 우리는 helper function byId를 사용하여 control에 view를 요청한다.
// List Control에서 우리는 새로 생성 된 filter 객체로 필터하기 위해 item aggregation의  바인딩에 액세스한다.
// 이렇게하면 검색 문자열에 따라 자동으로 목록이 필터링 되므로 검색이 실행될 때 일치하는 항목만 표시한다.
// operatorFilterOperator.Contains 필터는 대/소문자를 구분하지 않는다.