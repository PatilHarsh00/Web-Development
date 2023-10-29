const parentElement = document.getElementById("parent-container");

const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");

// Create card img element

const cardImageElement = document.createElement("img");
cardImageElement.classList.add("image");

cardImageElement.setAttribute("src","https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fHww")
cardImageElement.setAttribute("alt","Travel Card")
cardContainer.appendChild(cardImageElement);

//creating card text element
const cardTextElement = document.createElement("span");
cardTextElement.innerText = "The journey of thousand miles begins with single step";

cardContainer.appendChild(cardTextElement);

parentElement.appendChild(cardContainer);