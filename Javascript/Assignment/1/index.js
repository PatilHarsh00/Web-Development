let showList = document.getElementById("list");

let products = [
    {
      id: "1",
      item: "Shirt"
    },
    {
      id: "2",
      item: "Jeans"
    },
    {
      id: "3",
      item: "T-shirt"
    },
    {
      id: "4",
      item: "Denim Jacket"
    },
    {
      id: "5",
      item: "Casual Shoes"
    }
   ];
   
function display(list){
    for(let product of products){
        let container = document.createElement("div");
        let label = document.createElement("span");
        label.innerText = product.item;

        let button = document.createElement("button");
        button.setAttribute("data-ID", product.id);
        button.innerText = "Remove";
        
        container.appendChild(label);
        container.appendChild(button);
        showList.appendChild(container);
    }
}

display(products);

showList.addEventListener("click", (e) =>{
    let itemId = e.target.dataset.id;
    products = products.filter((product) => product.id !== itemId);
    showList.innerHTML = "";
    display(products);
})