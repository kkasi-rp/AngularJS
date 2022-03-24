(function (angular) {
    "use strict";
    angular.module("finance", []).factory("currencyConverter", [
        "$http",
        function ($http) {
            var currencies = ["USD", "EUR", "CNY"];
            var usdToForeignRates = {};

            var refresh = function () {
                var url =
                    "https://api.exchangeratesapi.io/latest?base=USD&symbols=" +
                    currencies.join(",");
                return $http.get(url).then(function (response) {
                    // usdToForeignRates = response.data.rates; // API Key issue, so mocking response
                    usdToForeignRates = { USD: 3, EUR: 2, CNY: 1 };
                    // usdToForeignRates["USD"] = 1;
                });
            };

            refresh();

            var convert = function (amount, inCurr, outCurr) {
                return (
                    (amount * usdToForeignRates[outCurr]) /
                    usdToForeignRates[inCurr]
                );
            };

            return {
                currencies: currencies,
                convert: convert,
            };
        },
    ]);
})(window.angular);

/*
  Copyright 2022 Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */
