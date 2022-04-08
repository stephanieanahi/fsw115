



let data = [
    {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
        "name": "ivysaur",
        "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
        "name": "venusaur",
        "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
        "name": "charmander",
        "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
        "name": "charmeleon",
        "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
        "name": "charizard",
        "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
        "name": "squirtle",
        "url": "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
        "name": "wartortle",
        "url": "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
        "name": "blastoise",
        "url": "https://pokeapi.co/api/v2/pokemon/9/"
    },
    {
        "name": "caterpie",
        "url": "https://pokeapi.co/api/v2/pokemon/10/"
    },
    {
        "name": "metapod",
        "url": "https://pokeapi.co/api/v2/pokemon/11/"
    },
    {
        "name": "butterfree",
        "url": "https://pokeapi.co/api/v2/pokemon/12/"
    },
    {
        "name": "weedle",
        "url": "https://pokeapi.co/api/v2/pokemon/13/"
    },
    {
        "name": "kakuna",
        "url": "https://pokeapi.co/api/v2/pokemon/14/"
    },
    {
        "name": "beedrill",
        "url": "https://pokeapi.co/api/v2/pokemon/15/"
    },
    {
        "name": "pidgey",
        "url": "https://pokeapi.co/api/v2/pokemon/16/"
    },
    {
        "name": "pidgeotto",
        "url": "https://pokeapi.co/api/v2/pokemon/17/"
    },
    {
        "name": "pidgeot",
        "url": "https://pokeapi.co/api/v2/pokemon/18/"
    },
    {
        "name": "rattata",
        "url": "https://pokeapi.co/api/v2/pokemon/19/"
    },
    {
        "name": "raticate",
        "url": "https://pokeapi.co/api/v2/pokemon/20/",
    }
];
const xhr = new XMLHttpRequest()


xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true);
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

        let urlEl = document.createElement("p");
        urlEl.innerHTML = `URL: ${data[i].url}`;
        listCont.appendChild(urlEl);

        let hrEl = document.createElement("hr");
        hrEl.classList.add("hr-design");
        listCont.appendChild(hrEl);

        list.append(listCont);
    }
};

function showData(data) {
    for (let i = 0; i < data.length; i++) {
        const pokemon = document.createElement("li");
        pokemon.textContent = "Name:" + data[i].name + "" + "URL: " + data[i].url;
        document.body.appendChild(pokemon);
    }
}