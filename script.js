//your JS code here. If required.
function promiseFn(){
	return new Promise((resolve, reject) => {
	setTimeout(()=>{
		resolve("Hello World!");
	},1000);
 });
} 
const output = document.getElementById('output');

promiseFn()
	.then((message)=>{
		output.textContent = message;
	})
    .catch((error)=>{
		console.error("An error occured", error);
	});
