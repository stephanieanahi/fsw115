console.log(axios)
axios.get("http://api.bryanuniversity.edu/stephanieguzman/list").then(res=> {
    console.log(res)
    for (var i = 0; i < res.data.length; i++ ) {
        var todo = res.data[i]
        var wrapper = document.createElement("div")
        document.body.appendChild(wrapper)
        wrapper.textContent = todo.name

        var wrapper = document.createElement("header")
        wrapper.appendChild(description)
        


      



    }




















}).catch(err => console.log(err))
