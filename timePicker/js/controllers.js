var cntrl = angular.module('starter.controllers', []);

cntrl.controller('barListController',function($scope,$ionicModal){
	
$scope.hour='01';
$scope.minute='00';
$scope.ampm='AM';
$scope.increaseHours = function(){
	var i = $scope.hour;
	
	if(i==12){
		i=1;
		$scope.hour='0'+i;
	}
	else{
		i++
		if(i<10){
			$scope.hour='0'+i;
		}
		else{
			$scope.hour=i;
		}
			
	}
		
}
$scope.decreaseHours = function(){
	var i = $scope.hour;
	
	if(i==1){
		i=12;
		$scope.hour=i;
	}
	else{
		i--;
			if(i<10){
			$scope.hour='0'+i;
		}
		else{
			$scope.hour=i;
		}
	}
}
$scope.increaseMinute = function(){
	var i = $scope.minute;
	
	if(i==59){
		i=00;
		$scope.minute=i;
	}
	else{
		i++
		if(i<10){
			$scope.minute='0'+i;
		}
		else{
			$scope.minute=i;
		}

	}
		
}
$scope.decreaseMinute = function(){
	var i = $scope.minute;
	
	if(i==0){
		i=59;
		$scope.minute=i;
	}
	else{
		i--;
			if(i<10){
			$scope.minute='0'+i;
		}
		else{
			$scope.minute=i;
		}
	}
}
$scope.increaseSession = function(){
	if($scope.ampm=="AM"){
		$scope.ampm="PM";
	}
	else{
		$scope.ampm="AM";
	}
	
		
}
$scope.decreaseSession = function(){
	if($scope.ampm=='PM'){
		$scope.ampm='AM';
	}
	else{
		$scope.ampm='PM';
	}
}	
$scope.set = function(){
		$scope.time=$scope.hour+':'+$scope.minute+':'+$scope.ampm;
		$scope.modal.hide();	
}	
	$ionicModal.fromTemplateUrl('templates/time.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
   // Open the login modal
  $scope.timePicker = function() {
    $scope.modal.show();
  };
  
  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
})




cntrl.controller('timePickerController', function($scope) {
$scope.hour='00';
$scope.minute='00';
$scope.ampm='AM';
$scope.increaseHours = function(){
	var i = $scope.hour;
	
	if(i==11){
		i=00;
		$scope.hour=i;
	}
	else{
		i++
			$scope.hour=i;
	}
		
}
$scope.decreaseHours = function(){
	var i = $scope.hour;
	
	if(i==0){
		i=11;
		$scope.hour=i;
	}
	else{
		i--;
			$scope.hour=i;
	}
}
$scope.increaseMinute = function(){
	var i = $scope.minute;
	
	if(i==59){
		i=00;
		$scope.minute=i;
	}
	else{
		i++
			$scope.minute=i;
	}
		
}
$scope.decreaseMinute = function(){
	var i = $scope.minute;
	
	if(i==0){
		i=59;
		$scope.minute=i;
	}
	else{
		i--;
			$scope.minute=i;
	}
}
$scope.increaseSession = function(){
	if($scope.ampm=="AM"){
		$scope.ampm="PM";
	}
	else{
		$scope.ampm="AM";
	}
	
		
}
$scope.decreaseSession = function(){
	if($scope.ampm=='PM'){
		$scope.ampm='AM';
	}
	else{
		$scope.ampm='PM';
	}
}
 

});