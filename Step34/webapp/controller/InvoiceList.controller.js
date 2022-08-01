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
		},
		onPress: function (oEvent) {
				var oItem = oEvent.getSource(); //클릭된 ObjectListItem을 반환

				var oRouter = this.getOwnerComponent().getRouter();
				//console.log(oItem.getBindingContext("invoice").getPath().substr(1)); // /Invoices/1에서 /을 제거하여 Invoices/1로 경로가 수정됨
				oRouter.navTo("detail", {
					invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
				});
		}
	});
});