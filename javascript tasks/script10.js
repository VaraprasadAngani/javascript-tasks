var count=10;
console.log(count);
var iterator = {
    step : function () {
		    count++;
		console.log("increment value"+count);
    },
	current : function(){
		console.log("current value"+count);
	},
	reset: function(){
		count=0;
		console.log("reseteed value"+count)
	}
	
}
iterator.step();
iterator.current();
iterator.reset();
console.log(count);