const str = window.location;
const url = new URL(str);
const id = url.searchParams.get("id");
console.log(id);
const orderId = document.getElementById("orderId");
orderId.innerHTML = id;