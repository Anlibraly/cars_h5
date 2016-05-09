app.controller('pageController', ['$scope', '$location', '$routeParams', '$http', function($scope, $location, $routeParams, $http) {
    $scope.pageId = $routeParams.pageId || 1;
    $scope.nextPage = function() {
        $scope.pageId = (++$scope.pageId % 6) || 5;
        $location.path("/page/" + $scope.pageId);
        $scope.pageClass = 'slideup';
        $scope.$apply();
    };
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000
    });  
    $scope.prePage = function() {
        $scope.pageId = (--$scope.pageId % 6) || 1;
        $location.path("/page/" + $scope.pageId);
        $scope.pageClass = 'slidedown';
        $scope.$apply();
    };    
    $scope.pageClass = 'slideup';
    $(".content").attr("style","height:"+$(window).height()+"px");
    $(".container").swipe( {
    //Generic swipe handler for all directions
    	swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
	    	//alert(direction);    
	    	if(direction == 'up'&&$scope.pageId>0){
	    		$(".page").removeClass('slidedown');
	    		$(".page").addClass('slideup');
	    		$scope.nextPage();	
	    	}
	    	if(direction == 'down'){
	    		$(".page").removeClass('slideup');
	    		$(".page").addClass('slidedown');
	    		$scope.prePage();
	    	}
		}
	 });    	
/*    if($scope.pageId==0){
    	setTimeout(function(){
    		$scope.nextPage();
    		var Media = document.getElementById("music");
    		Media.play();
    	},3500);
    }*/
}]);
