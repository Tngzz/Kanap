/*Fonction qui appelle l'API */
function apiCall() {
  fetch('http://localhost:3000/api/products')
    .then(reponse => reponse.json())
    .then(reponse => displayProducts(reponse))   
}


function displayProducts(reponseApi) {
  
  const products = reponseApi;
  console.log(reponseApi);
    
  for (let i = 0; i < products.length; i++) {
    
      /*Insértion de l'élèment a*/
      const a = document.createElement('a');
      document.querySelector(".items").appendChild(a);
      
      /*Lien vers page produit*/
      a.href = `./product.html?id=${products[i]._id}`;
    
      /*Insértion de l'élèment article*/
      const productArticle = document.createElement("article");
      a.appendChild(productArticle);
      
      /*Insértion de l'image + alt*/
      const productImg = document.createElement("img");
      productArticle.appendChild(productImg);
      productImg.src = products[i].imageUrl;
      productImg.alt = products[i].altTxt; 
      
      /*Insértion de h3*/
      const productName = document.createElement("h3");
      productArticle.appendChild(productName);
      productName.classList.add("productName");
      productName.innerHTML = products[i].name;
      
      /*Insértion de la description p*/
      const productDescription = document.createElement("p");
      productArticle.appendChild(productDescription);
      productDescription.classList.add("productName");
      productDescription.innerHTML = products[i].description;
  }
};

apiCall()

