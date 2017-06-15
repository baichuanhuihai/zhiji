/**
 * Created by 范川汇 on 2017/6/13.
 */
app.controller("shengji",function($scope,$http){
    $http({
        method:"get",
        url:"../json/shengji.json"
    }).then(function(response){
        console.log(response);
        $scope.response = response;
    },function(err){
        console.error(err);
    })
})