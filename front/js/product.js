/*recup de l'id dans l'url*/
const str = window.location;
const url = new URL(str);
const id = url.searchParams.get("id");
console.log(id)

const productURL = url + id;
console.log(productURL);

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
  const name = kanap.name
  const price = kanap.price
  const id = kanap._id
  image (imageUrl, altTxt)
  title (name)
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

function title (name) {
  document.querySelector("#title").textContent = name;
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
const idProduct = document.querySelector("#colors");
console.log(idProduct)

/*recupération quantity*/
const quantityKanap = document.querySelector("#quantity");
console.log(quantityKanap)


/*selection du bouton dans le dom pour addEvenListenner*/
const selectedButon = document.querySelector("#addToCart");
console.log(addToCart);


selectedButon.addEventListener("click", (event) => {
  

  /*récup valeur de la couleur*/
  const choiceProduct = idProduct.value;
 
  /*récup valeur de la quantity*/
  const quantityVal = quantityKanap.value;
  
  let selectedProduct = {
    idProduct: id,
    colorProduct: choiceProduct,
    quantity : quantityVal,
    /*price: price,*/
  };
  
  console.log(selectedProduct);
});


 /*local Storage*/
 