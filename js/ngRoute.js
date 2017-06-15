app.controller("fenye2",function($scope,$http){
    $http({
        method:"get",
        url:"../data/data1.json"
    }).then(function(res){
        $scope.fenye2_1 = res.data.fenye2_1
        $scope.fenye2_2 = res.data.fenye2_2
        $scope.fenye2_3 = res.data.fenye2_3
//      debugger;
    })
})
