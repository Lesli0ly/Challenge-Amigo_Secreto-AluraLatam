// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de 
// programación. Aquí deberás desarrollar la lógica para resolver el problema.

document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("amigo");
    const addButton = document.querySelector(".button-add");
    const nameList = document.getElementById("listaAmigos");
    const drawButton = document.querySelector(".button-draw");
    const resultDiv = document.getElementById("resultado");
    
    let names = [];

    addButton.addEventListener("click", function () {
        agregarAmigo();
    });

    drawButton.addEventListener("click", function () {
        sortearAmigo();
    });

    function agregarAmigo() {
        const name = nameInput.value.trim();
        if (name && !names.includes(name)) {
            names.push(name);
            actualizarLista();
            nameInput.value = "";
        } else if (names.includes(name)) {
            alert("Ese nombre ya está en la lista.");
        }
    }

    function actualizarLista() {
        nameList.innerHTML = names.map(name => `<li>${name}</li>`).join("\n");
    }

    function sortearAmigo() {
        if (names.length < 2) {
            alert("Debes ingresar al menos dos nombres para realizar el sorteo.");
            return;
        }

        let shuffledNames = [...names].sort(() => Math.random() - 0.5);
        let assignments = {};

        for (let i = 0; i < shuffledNames.length; i++) {
            let nextIndex = (i + 1) % shuffledNames.length;
            assignments[shuffledNames[i]] = shuffledNames[nextIndex];
        }

        mostrarResultados(assignments);
    }

    function mostrarResultados(assignments) {
        resultDiv.innerHTML = "<h3>Resultados del sorteo:</h3>" +
            Object.entries(assignments).map(([giver, receiver]) => `<p>${giver} → ${receiver}</p>`).join("\n");
    }
});
