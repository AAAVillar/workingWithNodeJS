console.log("this should take 5 seconds to work");
setTimeout( ()=>{
	console.log('hey ninjas');
},5000);


var time = 0;
var timer = setInterval( ()=>{
	time += 2;
	console.log(time + ' seconds have passed');
	if (time > 10){
		clearInterval(timer);
		
	}
},2000);



console.log("the name of the directory is :" + __dirname);  // Global object
console.log("the name of the directory is :" + __filename);  // Global object

// normal function statement
function sayHi (){
	console.log('Well Hello There');
};


// function expression
var sayGoodBye = ()=>{
	console.log('Later Gator...!');
};


function callfunction (fun){
			fun();
		};

sayHi();
sayGoodBye();
callfunction(sayGoodBye);
