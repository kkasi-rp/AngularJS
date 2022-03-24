(function (angular) {
    "use strict";
    angular.module("invoice", ["finance"]).controller("InvoiceController", [
        "currencyConverter",
        function InvoiceController(currencyConverter) {
            this.qty = 1;
            this.cost = 2;
            this.inCurr = "EUR";
            this.currencies = currencyConverter.currencies;

            this.total = function total(outCurr) {
                return currencyConverter.convert(
                    this.qty * this.cost,
                    this.inCurr,
                    outCurr
                );
            };
            this.pay = function pay() {
                window.alert("Thanks!");
            };
        },
    ]);
})(window.angular);

/*
Copyright 2022 Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
