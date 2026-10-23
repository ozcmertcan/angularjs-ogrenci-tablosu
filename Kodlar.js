var app = angular.module("benimapp", []);

app.controller("kontrol", function($scope) {
 $scope.ogrenciler=[{ad:'Mertcan',vize:65,final:95,cinsiyet:'e'},{ad:'Beyza',vize:85,final:95,cinsiyet:'k'},{ad:'Ecrin',vize:50,final:80,cinsiyet:'k'},{ad:'İbrahim',vize:20,final:60,cinsiyet:'e'}];
  $scope.yeniogrenciler= function(yeniad,yenivize,yenifinal,yenicinsiyet){
    $scope.ogrenciler.push({ad:yeniad,vize:yenivize,final:yenifinal,cinsiyet:yenicinsiyet});
    $scope.yeniad="";
    $scope.yenivize="";
    $scope.yenifinal="";
    $scope.yenicinsiyet="";}
  $scope.silme=function(gelenveri){
    $scope.ogrenciler.splice(gelenveri,1);
  };
});
