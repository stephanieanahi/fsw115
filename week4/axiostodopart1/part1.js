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




















}).catch(err => console.log(err))
