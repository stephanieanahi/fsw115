
fetch('https://fakestoreapi.com/products').then((data)=>
{
    return data.json();
}).then((completedata)=>{
    
    let data1="";
    completedata.map((values)=>{
        data1+=  `<div class="card">
        <h1 class="title">${values.title}</h1>
        <img src= ${values.image} alt="img" class="images">
        <p>${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
    </div>`
    });
    document.getElementById("cards").innerHTML=data1;
   
}).catch((err)=>{
    console.log(err);
})
var cards = [
    "title",
    "image",
    "description",
    "category",
    "price"
]
for (var i = 0; i < cards.length; i++){
    var newName = document.createElement("li")
    newName.textContent = cards[i]
    cards.append(newName)
}