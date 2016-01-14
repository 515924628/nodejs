async function func() {
	let res = await fetch("/login",{

	});
	let data = await res.json();
	console.log(data);
}