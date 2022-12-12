let productStorage = JSON.parse(localStorage.getItem("product"));
console.table(productStorage)


    for (let j = 0; j < productStorage.length; j++) {
        
        fetch(`http://localhost:3000/api/products/${productStorage[j].idProduct}`)
            .then((res) =>  res.json())
            .then((productData) => {console.log(productData)
                
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
                
                let deleteBtn = document.querySelectorAll(".deleteItem")
                   
                console.log(deleteBtn)
                    
                        for (let k = 0; k < deleteBtn.length; k++) {
                            
                            
                            deleteBtn[k].addEventListener("click" , (e) =>{
                                e.preventDefault(e);
                                console.log(deleteBtn[k])

                                let idDeleteProductStorage = productStorage[k].idProduct;
                                console.log(idDeleteProductStorage)

                                let colorDeleteProductStorage = productStorage[k].color;
                                console.log(colorDeleteProductStorage)

                                productStorage = productStorage.filter(productStorage => productStorage.idProduct !== idDeleteProductStorage || productStorage.color !== colorDeleteProductStorage);











                                // productStorage.splice(idDeleteProductStorage[k], 1)
                                // console.log(productStorage)
                                
                                localStorage.setItem("product", JSON.stringify(productStorage));
                                
                                // window.location.reload();
                            });
                        };
            });
        }