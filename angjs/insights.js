app.controller('SpecCompany', function($scope, $http, $location, $routeParams, $window) {
    $scope.spec = "";
    $scope.head = "Overall ";
    var datapoints;
    $scope.tet = "Kalyan is a coder";
    $http.get("php/test.php?comp=" + $routeParams.compName).then(function(response) {
        $scope.spec = response.data.companies;

        datapoints = [
            { y: parseFloat($scope.spec[0].open), indexLabel: "open" },
            { y: parseFloat($scope.spec[0].low), indexLabel: "lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
            { y: parseFloat($scope.spec[0].high), indexLabel: "highest", markerColor: "red", markerType: "triangle" },
            { y: parseFloat($scope.spec[0].close), indexLabel: "close" }
        ];
        $scope.what();
        //console.log($scope.spec[0].open);
    });

    $http.get("php/test.php?compName=" + $routeParams.compName).then(function(response) {
        $scope.ck = response.data.companies;
        console.log($scope.ck);
    });


    $scope.plot = function(event) {
        for (var i = 0; i < $scope.ck.length; i++) {
            if ($scope.ck[i].id == event.currentTarget.id) {
                datapoints = [
                    { y: parseFloat($scope.ck[i].open), indexLabel: "open" },
                    { y: parseFloat($scope.ck[i].low), indexLabel: "lowest", markerColor: "DarkSlateGrey", markerType: "cross" },
                    { y: parseFloat($scope.ck[i].high), indexLabel: "highest", markerColor: "red", markerType: "triangle" },
                    { y: parseFloat($scope.ck[i].close), indexLabel: "close" }
                ];
                $scope.head = $scope.ck[i].data.substring(0, 10);
                $window.scrollTo(0, 0);
                $scope.what();

            }
        }
    }


    $scope.what = function() {

        //console.log(datapoints);
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: $scope.head + " data of " + $routeParams.compName
            },
            axisY: {
                includeZero: false
            },
            data: [{
                type: "line",
                dataPoints: datapoints


            }]
        });
        chart.render();

    }
})