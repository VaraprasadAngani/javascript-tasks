var y =10;
console.log(y);
   function init(y) {
	   window.y++
	   console.log("global value"+window.y); 
      var y;
      console.log("local value"+y); 
   }
init(2);