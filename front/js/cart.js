let productStorage = JSON.parse(localStorage.getItem("product"));
console.table(productStorage);

let totalProductsQuantity = 0;
let totalProductsPrice = 0;

function displayCartItems () {
    
    for (let j = 0; j < productStorage.length; j++) {
        
        fetch(`http://localhost:3000/api/products/${productStorage[j].idProduct}`)
            .then((res) =>  res.json())
            .then((productData) => {
                
                console.log(productData)
                
                console.log('nombre d article dans le panier ' + productStorage.length)    
        
                /*Insértion de l'élèment article dans le panier*/
                const cartArticle = document.createElement("article");
                cartArticle.classList.add("cart__item");
                cartArticle.dataset.id = productStorage[j].idProduct;
                const idProductsInStorage = cartArticle.dataset.id
                cartArticle.dataset.colors = productStorage[j].color;
                const colorProductInstorage = cartArticle.dataset.colors;
                document.querySelector("#cart__items").appendChild(cartArticle);
                
                console.log(idProductsInStorage)
                console.log(colorProductInstorage)
                
        
                /*création de la div cart item img*/
                const divCartItemImg = document.createElement("div");
                divCartItemImg.classList.add("cart__item__img");
                cartArticle.appendChild(divCartItemImg);
        
                /*Insértion de l'image + alt*/
                const cartImg = document.createElement("img");
                cartImg.src = productData.imageUrl;
                cartImg.alt = productData.altTxt; 
                divCartItemImg.appendChild(cartImg);
        
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
                cartName.innerHTML = productData.name;
                
                /*Création P/couleur*/
                const paraColor = document.createElement("p");
                divCartItemContentDesc.appendChild(paraColor);
                paraColor.innerHTML = cartArticle.dataset.colors;
        
                /*Création P/price*/
                const paraPrice = document.createElement("p");
                divCartItemContentDesc.appendChild(paraPrice);
                paraPrice.innerHTML = productData.price +" €";
        
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
                cartInput.value = productStorage[j].quantity;
                divCartItemContentSetQte.appendChild(cartInput);
        
                /*création div cart__item__content__settings__delete*/
                const divCartItemContentSetDel = document.createElement("div");
                divCartItemContentSetDel.classList.add("cart__item__content__settings__delete");
                divCartItemContent.appendChild(divCartItemContentSetDel);
               
                /*Création P/delete*/
                const paraDelete = document.createElement("p");
                paraDelete.classList.add("deleteItem");
                divCartItemContentSetDel.appendChild(paraDelete);
                paraDelete.innerHTML = "Supprimer"

                
                /*Affichage du nombre d'articles dans le panier*/
                totalProductsQuantity += Number(productStorage[j].quantity);
                document.querySelector("#totalQuantity").textContent = totalProductsQuantity;

                /*Affichage du prix*/
                totalProductsPrice += Number(productStorage[j].quantity * productData.price);
                document.querySelector("#totalPrice").textContent = totalProductsPrice;

                /*AddEventlistener qui permet la supression d'un produit dans le panier*/
                    divCartItemContentSetDel.addEventListener("click", (e) => {
                        let idDeleteProductStorage = productStorage[j].idProduct;
                        console.log(idDeleteProductStorage);

                        let colorDeleteProductStorage = productStorage[j].color;
                        console.log(colorDeleteProductStorage);
                        
                        /*Filtrer le panier pour ne garder que les produits non sélectionnés*/
                        productStorage = productStorage.filter(productStorage => productStorage.id !== idDeleteProductStorage 
                                                            && productStorage.color !== colorDeleteProductStorage);
                            localStorage.setItem("product", JSON.stringify(productStorage))
                            window.location.reload(); 
                    })
                
                console.log(productStorage)
                
                /*Modification de la valeur en fonction du changement de quantité*/
                 
                
                
                 cartInput.addEventListener("click", (e) => {
                    let idUpdate = productStorage[j].idProduct;
                    console.log(idUpdate)

                    let colorUpdate = productStorage[j].color;
                    console.log(colorUpdate)

                    // // productStorage = productStorage.filter(productStorage => productStorage.id === idUpdate 
                    // //     && productStorage.color === colorUpdate);

                 let QteValue = cartInput.value
                    
                 console.log(QteValue)
                    
                    
                    console.log(productStorage.quantity)


                    let totalQte =  Number(productStorage[j].quantity) + Number(QteValue);
                    console.log(totalQte)
                    
                    

                     console.log(productStorage)
                     document.querySelector("#totalQuantity").textContent = totalQte;

                    // localStorage.setItem("product", JSON.stringify(totalQte))

                    
                    
                    
                 })
        }
    )}
}

displayCartItems ()

// function newQuantiy (click) {
//     let targetProduct = click.target.closest("article");
//     console.log(targetProduct)
//     let quantityProduct = click.target.closest(".itemQuantity");
//     console.log(quantityProduct)
// }

/*Formulaire*/

/*Form .QuerrySelector*/
let firstName  = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let address = document.querySelector("#address");
let city = document.querySelector("#city");
let email = document.querySelector("#email");


/*accepte lettres majuscule et minuscule + carac. spéciaux sans limite de taille*/
let regexFirstLastNameCity = /^[a-zA-Z -àâäéèêëïîôöùûüÿçæÆœŒ][^@&"()!_$*€£`+=\/;?#\d]{2,30}$/;
let regexAdress = /^[0-9]{1,3}[a-zA-Z -àâäéèêëïîôöùûüÿçæÆœŒ]{1,45}[0-9]{5}$/;
let regexEmail = /^[a-zA-Z -àâäéèêëïîôöùûüÿçæÆœŒ]{2,20}@[a-zA-Z -àâäéèêëïîôöùûüÿçæÆœŒ]{2,10}\.[a-zA-Z -àâäéèêëïîôöùûüÿçæÆœŒ]{2,5}$/;

/*Ecoute du formulaire*/

/*Ecoute du Prénom*/
firstName.addEventListener("input" ,validationFirstName);

function validationFirstName () {
    if (regexFirstLastNameCity.test(firstName.value) == false){
        firstNameErrorMsg.textContent ="Veuillez renseigner au minimum 2 lettres, les caractères spéciaux ne sont pas autorisés ";
        return false;
    } else{
        firstNameErrorMsg.textContent = "";
        return true;
    }
}

/*Ecoute du nom*/
lastName.addEventListener("input" ,validationLastName);

function validationLastName () {
    if (regexFirstLastNameCity.test(lastName.value) == false){
        lastNameErrorMsg.textContent ="Veuillez renseigner au minimum 2 lettres, les caractères spéciaux ne sont pas autorisés ";
        return false;
    } else{
        lastNameErrorMsg.textContent = "";
        return true;
    }
}

/*Ecoute de l'adresse*/
address.addEventListener("input" ,validationAdress);

function validationAdress () {
    if (regexAdress.test(address.value) == false){
        addressErrorMsg.textContent ="Exemple: 20 rue des Sapins 75000";
    } else{
        addressErrorMsg.textContent = "";
        return true;
    }
}

/*Ecoute de la ville*/
city.addEventListener("input" ,validationCity);

function validationCity () {
    if (regexFirstLastNameCity.test(city.value) == false){
        cityErrorMsg.textContent ="Exemple: Paris";
    } else{
        cityErrorMsg.textContent = "";
        return true;
    }
}

/*Ecoute de l'adresse mail*/
email.addEventListener("input" ,validationEmail);

function validationEmail () {
    if (regexEmail.test(email.value) == false){
        emailErrorMsg.textContent ="Exemple: exemple@exemple.fr";
    } else{
        emailErrorMsg.textContent = "";
        return true;
    }
}

/*Au click sur commander recup valeurs*/

function formValueToSend () {
    let order = document.querySelector("#order");
    
    order.addEventListener("click", (even) => {
        even.preventDefault(even);
        
        // Valeurs du formulaire
        let formData = {
            Firstname : firstName.value,
            Lastname : lastName.value,
            address : address.value,
            City : city.value,
            email : email.value,
        };
        
            console.log(formData)
        
        // Verif du formulaire
       if (formData !== null
            && validationFirstName(firstName)
            && validationLastName(lastName)
             && validationAdress(address)
             && validationCity(city)
             && validationEmail(email)) {
            
             localStorage.setItem("form", JSON.stringify(formData));
            
             // Element à envoyer dans l'api
             const SendApi = {
                 productStorage,
                formData
             }
            
           console.log(SendApi)

    //         fetch("http://localhost:3000/api/products/order", {
    //             method: 'POST',
    //             headers: {
    //               'Content-Type': 'application/json;charset=utf-8'
    //             },
    //             body: JSON.stringify({productStorage, formData})
    //           })
    //           .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             console.log(data);
    //             localStorage.setItem("orderId", data.orderId);
    //             // window.location.href = `confirmation.html?orderId=${data.orderId}`;
                
    //         })

    //         } else {
    //
                //  alert("Veuillez vérifier vos coordonnées et/ou le contenu de votre panier afin de poursuivre!")};
    }
    });
    

}

formValueToSend ()