var iterator=new Object();
iterator.name="prasad";
iterator.age=22;
iterator.no=877887788;
iterator.sex="male";
iterator.address="hyderabad";
count=0;
for(var i in iterator)
{
	if(iterator.hasOwnProperty(i))
	{   
		console.log("current step is"+count);
	}
    count++;
}