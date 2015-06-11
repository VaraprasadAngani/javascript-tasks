var count=10;
console.log("Initial count -" + count);
var iterator = {
    step : function () {
		    count++;
		console.log("increment value -"+count);
    },
	current : function(){
		console.log("current value -"+count);
	},
	reset: function(){
		count=0;
		console.log("reset value -"+count)
	},
	getInstance : function(){
		console.log("Inside instance getter...")
		return this;
	}
}
var instanceTaken = iterator.getInstance();
instanceTaken.step();
instanceTaken.current();
instanceTaken.reset();
console.log("Final count -" +count);