const Http = new XMLHttpRequest();
//const url = 'https://api.vschool.io/pokemon';

Http.open("GET", 'https://api.vschool.io/pokemon');
Http.send();

Http.onreadystatechange = function () {
    if (Http.readyState === 4 && Http.status === 200) {
        const data = JSON.parse(Http.responseText)
        showData(data);
    }
}

const showData = (arr) => {

    for (let i = 0; i < arr.objects[0].pokemon.length; i++) {
        const pokemon = arr.objects[0].pokemon[i];
        const h1 = document.createElement('h1');
        const p = document.createElement('p')
        h1.textContent = `Name: ${pokemon.name}`
        p.textContent = `Resource: ${pokemon.resource_uri}`;
        h1.style.fontSize = "18px";
        p.style.fontSize = "15px";
        document.body.appendChild(h1);
        document.body.appendChild(p)
    }
}