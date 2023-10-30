//your JS code here. If required.
const promiseFn(){
	return new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve("Hello World!");
	},1000);
 });
} 
const output = ocument.getElementById('output');

promiseFn()
	.then((message)=>{
		output.innerText = message;
	})
    .catch((error)=>{
		console.error("An error occured", error);
	});
