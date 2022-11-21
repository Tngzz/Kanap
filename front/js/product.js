const str = window.location;
const url = new URL(str);
const id = url.searchParams.get("id");

const productURL = url + id;
console.log(productURL);

  fetch(`http://localhost:3000/api/products/${id}`)
    .then((reponse) => reponse.json())
    .then((res) => productObject(res))

function productObject(kanap) {
  console.log({kanap})
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
  /*newColors (colors)*/
}

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

