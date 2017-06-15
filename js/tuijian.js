/**
 * Created by 范川汇 on 2017/6/12.
 */
app.controller("tuijian",function($scope,$http){
    $http({
        method:"get",
        url:"../json/tsconfig.json"
    }).then(function(data){
        console.log(data);
        $scope.data = data;
    },function(err){
        console.error(err);
    })
    
    $scope.on1 = function(index){
        $scope.data.data.jieshao[index].img1 = "../img/img_btm2.png";
    }

    $scope.on2 = function(index){
        $scope.data.data.jieshao[index].img2 = "../img/img_btm02.png";
    }
});