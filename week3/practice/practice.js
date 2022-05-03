




const xhr = new XMLHttpRequest()


xhr.open("GET", "https://swapi.dev/api/planets/3", true);
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        showData(data.results);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
        console.log(xhr.responseText);
    }
};

function showData(data) {
    var list = document.getElementById("myList");
    for (let i = 0; i < data.length; i++) {
        let listCont = document.createElement("li");
        
        let nameEl = document.createElement("p");
        nameEl.innerHTML = `Name: ${data[i].name}`;
        listCont.appendChild(nameEl);

        list.append(listCont);
    }};
    function showData(data) {
        for (let i = 0; i < data.length; i++) {
            const planet = document.createElement("li");
            planet.textContent = "Name:" + data[i].name + "" + "URL: " + data[i].url;
            document.body.appendChild(planet);
        }
    }