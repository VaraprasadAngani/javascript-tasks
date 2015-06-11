var y =10;
console.log(y);
   function init(y) {
	  var y;
	  y++;
      console.log("local value"+y); 
	  console.log("global value"+window.y);
   }
init(4);
