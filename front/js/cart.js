let productStorage = JSON.parse(localStorage.getItem("product"));
console.table(productStorage)

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
                document.querySelector("#cart__items").appendChild(cartArticle);
                
                console.log(idProductsInStorage)
                console.log(cartArticle.dataset.colors)
                
        
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
                
                
                // /*Calcul prix total panier*/
                
                let totalQte = productStorage[j].quantity;
                console.log(totalQte)

                let totalPrice = productData.price;
                console.log(totalPrice)

                let finalPrice = totalQte * totalPrice;
                console.log(finalPrice)
                                

                // // /*Afficher total article + total prix*/
                document.querySelector("#totalQuantity").textContent = totalQte;
                document.querySelector("#totalPrice").textContent = finalPrice;

                let deleteBtn = document.querySelectorAll(".deleteItem");
                   
                console.log(deleteBtn);

                for (let k = 0; k < deleteBtn.length; k++) {
                                                        
                deleteBtn[k].addEventListener("click" , (e) => {
                e.preventDefault(e);
                console.log(deleteBtn[k])

                let idDeleteProductStorage = productStorage[k].idProduct;
                console.log(idDeleteProductStorage);

                 productStorage = productStorage.filter(el => el.idProduct !== idDeleteProductStorage)
                // console.log(productStorage);

                // productStorage.splice(idDeleteProductStorage[k], 1)
            

            //   localStorage.setItem("product", JSON.stringify(productStorage));
            
            //   window.location.reload();
         });
     };

        });
            
        }
    






    

        


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


    
    let order = document.querySelector("#order");
    
    order.addEventListener("click", (even) =>{
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

            fetch("http://localhost:3000/api/products/order", {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({productStorage, formData})
              })
              .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                localStorage.setItem("orderId", data.orderId);
                // window.location.href = `confirmation.html?orderId=${data.orderId}`;
                
            })

            } else {
                alert("Veuillez vérifier vos coordonnées et/ou le contenu de votre panier afin de poursuivre!")};
    });

