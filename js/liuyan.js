/**
 * Created by 范川汇 on 2017/6/13.
 */
app.controller("liuyan",function($scope,$http) {
    $scope.bar_li_change = function(index){
        angular.forEach($scope.bar_li_arr,function(value){
            value.on = false;
        })
        $scope.bar_li_arr[index].on = true;
        var fch_liuyan_qiehuan = document.getElementsByClassName("fch_liuyan_qiehuan");
        for(var i=0;i<fch_liuyan_qiehuan.length;i++){
            fch_liuyan_qiehuan[i].style.display = "none";
        }
        fch_liuyan_qiehuan[index].style.display = "block";
    }
    $scope.bar_li_arr = [
        {"txt":"收到的留言","on":true},
        {"txt":"已发出的留言","on":false},
        {"txt":"系统通知","on":false}
    ];
    $scope.qx = function(){
        angular.forEach($scope.res.data.liuyan,function(value){
            if(value.ischecked != true){
                value.ischecked = true;
            }else{
                value.ischecked = false;
            }
        })
    }
    $scope.xs = function(){
        for(var i=$scope.res.data.liuyan.length-1;i>=0;i--){
            if($scope.res.data.liuyan[i].ischecked){
                $scope.res.data.liuyan.splice(i,1);
            }
        }
    }
    $scope.dx = function(index){
        $scope.res.data.liuyan[index].ischecked = !$scope.res.data.liuyan[index].ischecked;
    }
    $http({
        method:"get",
        url:"../json/liuyan.json"
    }).then(function(res){
        console.log(res);
        $scope.res = res;
    },function(err){
        console.error(err);
    })
})