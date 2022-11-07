function apiCall() {
  fetch('http://localhost:3000/api/products')
    .then(reponse => reponse.json())
    .then(reponse => displayProducts(reponse))
      document.querySelector(".productName").innerHTML = products.name;
      document.querySelector(".colors").innerHTML = products.colors;
      document.querySelector(".description").innerHTML = products.description;
      document.querySelector(".imageUrl").innerHTML = products.imageUrl;
      document.querySelector(".altTxt").innerHTML = products.name;
      document.querySelector(".price").innerHTML = products.price;
      document.querySelector("._id").innerHTML = products._id;
}

function displayProducts(reponseApi) {
  const products = reponseApi;
  console.log(products);
  for (let product of products) {
        console.log(product);
    }
}

apiCall();
 