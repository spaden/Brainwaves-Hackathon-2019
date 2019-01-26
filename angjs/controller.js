app.controller('Main', function($scope, $http, StockData, $location) {
    var cat;
    $scope.availabelTags = new Array();

    $scope.go = function(event) {
        var input = document.querySelector("#company");
        $location.path('/specific/' + input.value);
        console.log(input.value);
    };
    $scope.go2 = function(event) {
        $location.path('/specific/' + event.currentTarget.id);
    }

    /* $http.get("php/test.php?stock=fetch").then(function(response) {
          = response.data.companies;
     })*/





    $scope.check = function() {
        var b = document.querySelector("#dthr");
        var lang = document.createElement("datalist");
        lang.id = "filtsrch";
        for (var i = 0; i < $scope.availabelTags.length; i++) {
            var opt1 = document.createElement("option");
            opt1.value = $scope.availabelTags[i];
            lang.appendChild(opt1);
        }
        b.appendChild(lang);
        console.log(b.innerHTML);

    }





    cat = StockData.fetchData();
    cat.then(function(data) {

        $scope.ck = data.data.companies;
        for (var i = 0; i < data.data.companies.length; i++) {
            $scope.availabelTags.push(data.data.companies[i].symbol);

        }
        $scope.check();
    });



});