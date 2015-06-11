(function(){
	var y = "Y";
	function f1(num1, num2){
		console.log(y);
		return num1+num2;
	};
	window.f2=function(num1, num2){
	return f1(num1,num2);
		};
	})();

