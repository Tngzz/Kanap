/*Récup de l'id dans l'url*/
const str = window.location;
const url = new URL(str);
const id = url.searchParams.get("id");

let quantityValueLs = 0;

/*Récup url Api + ajout de l'id*/
function fetchApi () {
  fetch(`http://localhost:3000/api/products/${id}`)
  .then((reponse) => reponse.json())
  .then((res) => productObject(res))
  .catch(error => alert("Une erreur s'est produite, veuillez rafraichir la page !"))
}

fetchApi ()

/*Récup valeurs Api (kanap) transforme en const*/
function productObject(kanap) {
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

/*Récupération option couleurs*/
const colorProduct = document.querySelector("#colors");

/*Récupération quantity*/
const quantityKanap = document.querySelector("#quantity");

/*sélection du bouton dans le dom pour addEvenListenner*/
const selectedButon = document.querySelector("#addToCart");

/*On vient écouter le bouton addToCart à chaque click de la souris*/
function selectedButonEventListener () {
  selectedButon.addEventListener("click", (event) => {

    /*Récup valeur de la couleur*/
    const choiceColorProduct = colorProduct.value;
   
    /*Récup valeur de la quantity*/
    let quantityVal = quantityKanap.value;
    
    if(quantityVal <1 ||quantityVal >100 || colors.value ===""  ){
      alert("Veuillez vérifier votre sélection, vous devez choisir une couleur et indiquer une quantité d'article entre 1 et 100");
    
    }else{
  
      /*Les infos du produit sélectionné */
      let selectedProduct = {
        idProduct: id,
        color: choiceColorProduct,
        quantity: quantityVal,
      };
  
      /*local Storage*/
      let productStorage = JSON.parse(localStorage.getItem("product"));

      if(productStorage === null){
          productStorage = [];
          productStorage.push(selectedProduct);
          localStorage.setItem("product", JSON.stringify(productStorage));
          alert("vous venez d'ajouter un article au panier !")
      
        }else{
          const compareObject = productStorage.findIndex(productStorage => productStorage.idProduct === selectedProduct.idProduct && productStorage.color === selectedProduct.color);
          
          if(compareObject !== -1){
              let totalQte = document.querySelector("#quantity").value;
              productStorage[compareObject].quantity = totalQte;
              localStorage.setItem("product", JSON.stringify(productStorage));
              alert("vous venez de mettre à jour la quantité de cet article dans le panier!");
          } else{
              productStorage.push(selectedProduct);
              localStorage.setItem("product", JSON.stringify(productStorage));
              alert("vous venez d'ajouter un article au panier !")
          }
      }
    }
  })
}
selectedButonEventListener ()


