console.log(axios)
axios.get("http://api.bryanuniversity.edu/stephanieguzman/list").then(res=> {
    console.log(res)
    for (var i = 0; i < res.data.length; i++ ) {
        var todo = res.data[i]
        var wrapper = document.createElement("div")
        document.body.appendChild(wrapper)
        wrapper.id = ("wrapper")
        
        var checkbox = document.createElement("input")
        wrapper.appendChild(checkbox)
       checkbox.type = "checkbox"
       checkbox.checked = todo.isComplete

        var name = document.createElement("h1")
        wrapper.appendChild(name)
        name.textContent = todo.name
        
        var description = document.createElement("header")
        wrapper.appendChild(description)
        description.textContent = todo.description
        

        var price = document.createElement("span")
        wrapper.appendChild(price)
        price.textContent = todo.price
        

  
    }
    })

    var form = document.createElement("form")
    document.body.appendChild(form)
    form.id = ("form")

    var nameInput = document.createElement("input")
    form.appendChild(nameInput)
   nameInput.type = "text"
   nameInput.placeholder = "give me a name"

    var descriptionInput = document.createElement("input")
    form.appendChild(descriptionInput)
   descriptionInput.type = "text"
   descriptionInput.placeholder = "give me a description"

   var priceInput = document.createElement("input")
   form.appendChild(priceInput)
  priceInput.type = "text"
  priceInput.placeholder = "give me a price"


  var btn = document.createElement("button")
  form.appendChild(btn)
  btn.textContent = "submit"
  btn.addEventListener("click", function(event){
      event.preventDefault()
        var data = {
            name: nameInput.value,
            description: descriptionInput.value,
            price: priceInput.value
        }
        axios.post ("http://api.bryanuniversity.edu/stephanieguzman/list", data).then(res=>{
            var todo = res.data
            var wrapper = document.createElement("div")
            document.body.appendChild(wrapper)
            wrapper.id = ("wrapper")
            
            var checkbox = document.createElement("input")
            wrapper.appendChild(checkbox)
           checkbox.type = "checkbox"
           checkbox.checked = todo.isComplete
    
            var name = document.createElement("h1")
            wrapper.appendChild(name)
            name.textContent = todo.name
            
            var description = document.createElement("header")
            wrapper.appendChild(description)
            description.textContent = todo.description
            
    
            var price = document.createElement("span")
            wrapper.appendChild(price)
            price.textContent = todo.price
        }).catch( err =>console.log(err))

  })

  