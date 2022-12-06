/*recup de l'id dans l'url*/
const str = window.location;
const url = new URL(str);
const id = url.searchParams.get("id");
console.log(id);



/*Récup url Api + ajout de l'id*/
fetch(`http://localhost:3000/api/products/${id}`)
  .then((reponse) => reponse.json())
  .then((res) => productObject(res))

/*recup valeurs Api (kanap) transforme en const*/
function productObject(kanap) {
  console.table(kanap)
  const altTxt = kanap.altTxt
  const colors = kanap.colors
  const description = kanap.description
  const imageUrl = kanap.imageUrl
  const nameProd = kanap.name
  const price = kanap.price
  const id = kanap._id
  image (imageUrl, altTxt)
  title (nameProd)
  neWdescription (description)
  newPrice (price)
  newColors (colors)
}

/*affichage des produits sur la page produit*/
function image (imageUrl, altTxt) {
  const image = document.createElement("img");
  image.src = imageUrl;
  image.alt = altTxt;
  document.querySelector(".item__img").appendChild(image)
}

function title (nameProd) {
  document.querySelector("#title").textContent = nameProd;
  
}

function neWdescription (description) {
 document.querySelector("#description").textContent = description;
}

function newPrice (price) {
  document.querySelector("#price").textContent = price;
}

/*Ajout du choix des couleurs*/
function newColors (colors) {
   const select = document.querySelector("#colors");
  
  if (select != null) {
    colors.forEach((color) => {
      const option = document.createElement("option");
      option.value = color;
      option.textContent = color;
      select.appendChild(option);
    });
  }
}

/*recupération option couleurs*/
const colorProduct = document.querySelector("#colors");
console.log(colorProduct)

/*recupération quantity*/
const quantityKanap = document.querySelector("#quantity");
console.log(quantityKanap)

/*selection du bouton dans le dom pour addEvenListenner*/
const selectedButon = document.querySelector("#addToCart");
console.log(addToCart);

/*On vient écouter le bouton addToCart à chaque click de la souris*/
selectedButon.addEventListener("click", (event) => {
  
  /*récup valeur de la couleur*/
  const choiceColorProduct = colorProduct.value;
  console.log(choiceColorProduct);
 
  /*récup valeur de la quantity*/
  const quantityVal = quantityKanap.value;

  /*Les infos du produit sélectionné */
  let selectedProduct = {
    idProduct: id,
    color: choiceColorProduct,
    quantity: quantityVal,
  
  };

  console.log(selectedProduct)
   
/*local Storage*/
let productStorage = JSON.parse(localStorage.getItem("product"));
console.log(productStorage);

/*Si localStorage n'est pas vide alors on push les infos */
if (productStorage) {
    productStorage.push(selectedProduct);
    localStorage.setItem("product", JSON.stringify(productStorage));
}

/*Si localStorage est vide alors on crée un tableau et on y ajoute les valeurs*/
else{
  productStorage = [];
  productStorage.push(selectedProduct);
  localStorage.setItem("product", JSON.stringify(productStorage));
  
}

});

