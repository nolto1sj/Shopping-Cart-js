class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

let carrot = new Product("Carrot", 1.00);
let cheese = new Product("Cheese", 3.00);
let potato = new Product("Potato", 0.50);

var productArray = [carrot, cheese, potato];
let cartArray = [];

function buildTable(data){
    var table = document.getElementById("myTable")

    for (var i = 0; i < data.length; i++){
        var product = data[i];
        var row = `<tr>
                    <td>${data[i].name}</td>
                    <td>$${data[i].price.toFixed(2)}</td>
                    <td>
                    <div>
                    <button id="cart-button" type="button" class="btn btn-secondary" onclick='addToCart(${JSON.stringify(product)})'>Add To Cart</button>
                    </div>
                    </td>
                    </tr>`;
                    table.innerHTML += row;
    }
};

buildTable(productArray);

function addToCart(product){
    console.log(product);
    console.log(cartArray.length); 
    cartArray.push(product);
    //var addedProduct = document.createElement("div");
};

function checkout(){
    let total = 0;
    for (i = 0; i < cartArray.length; i++){
        console.log(cartArray[i].name);
    }
    for (i = 0; i < cartArray.length; i++){
        let itemCost = cartArray[i].price;
        total += itemCost;
    }
    console.log("Your total is: $" + total);
    // var displayTotal = document.getElementById("my-total");
    // displayTotal.innerHTML = `<h2>${total}</h2>`;

    // displayTotal.innerHTML = `<h2>${total}</h2>`;
    //alert("Your total is: $" + total.toFixed(2));
   // console.log(total);
   
}