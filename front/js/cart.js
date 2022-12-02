
let productStorage = JSON.parse(localStorage.getItem("product"));
console.log(productStorage);

fetch(`http://localhost:3000/api/products`)
        .then((res) =>  res.json())
        .then((kanap) => displayCartItems(kanap))

function displayCartItems (kanapApi) {
    
    const itemCartApi = kanapApi;
    console.log(itemCartApi);

    const idCartItems = document.querySelector("#cart__items");

    for (let j = 0; j < productStorage.length; j++) {
        console.log(productStorage.length)    

        /*Insértion de l'élèment article dans le panier*/
        const cartArticle = document.createElement("article");
        cartArticle.classList.add("cart__item");
        cartArticle.dataset.id = productStorage[j].idProduct;
        cartArticle.dataset.colors = productStorage[j].color;
        document.querySelector("#cart__items").appendChild(cartArticle);
        
        console.log(cartArticle.dataset.id)
        console.log(cartArticle.dataset.colors)
        

        /*création de la div cart item img*/
        const divCartItemImg = document.createElement("div");
        divCartItemImg.classList.add("cart__item__img");
        cartArticle.appendChild(divCartItemImg);

        /*Insértion de l'image + alt
        const cartImg = document.createElement("img");
        productImg.src = imageUrl;
        productImg.alt = altTxt; 
        divCartItemImg.appendChild(cartImg);*/

        /*création div cart__item__content*/
        const divCartItemContent = document.createElement("div");
        divCartItemContent.classList.add("cart__item__content");
        cartArticle.appendChild(divCartItemContent);

        /*création div cart__item__content_description*/
        const divCartItemContentDesc = document.createElement("div");
        divCartItemContent.classList.add("cart__item__content__description");
        divCartItemContent.appendChild(divCartItemContentDesc);

        /*création h2*/
        const cartName = document.createElement("h2");
        divCartItemContentDesc.appendChild(cartName);
        cartName.innerHTML = productStorage[j].name;

        /*Création P/couleur*/
        const paraColor = document.createElement("p");
        divCartItemContentDesc.appendChild(paraColor);
        paraColor.innerHTML = cartArticle.dataset.colors;

        /*Création P/price*/
        const paraPrice = document.createElement("p");
        divCartItemContentDesc.appendChild(paraPrice);
        paraPrice.innerHTML = productStorage.price +" €";

        /*création div cart__item__content_settings*/
        const divCartItemContentSet = document.createElement("div");
        divCartItemContentSet.classList.add("cart__item__content__settings");
        cartArticle.appendChild(divCartItemContentSet);

        /*création div cart__item__content__settings__quantity*/
        const divCartItemContentSetQte = document.createElement("div");
        divCartItemContentSetQte.classList.add("cart__item__content__settings__quantity");
        divCartItemContentSet.appendChild(divCartItemContentSetQte);

        /*Création P/quantity*/
        const paraQuantity = document.createElement("p");
        divCartItemContentSetQte.appendChild(paraQuantity);
        paraQuantity.innerHTML = "Qté :"

        /*Création input*/
        const cartInput = document.createElement("input");
        cartInput.type = "number";
        cartInput.name = "itemQuantity";
        cartInput.min = "1";
        cartInput.max = "100";
        cartInput.value = productStorage.quantity;
        divCartItemContentSetQte.appendChild(cartInput);

        /*création div cart__item__content__settings__delete*/
        const divCartItemContentSetDel = document.createElement("div");
        divCartItemContentSetDel.classList.add("cart__item__content__settings__delete");
        divCartItemContent.appendChild(divCartItemContentSetDel);

        /*Création P/delete*/
        const paraDelete = document.createElement("p");
        divCartItemContentSetDel.appendChild(paraDelete);
        paraDelete.innerHTML = "Supprimer";

        }
    };
    
  
