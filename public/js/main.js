
let changeH2 = document.querySelectorAll("h2")[0]
changeH2.innerText = "Le titre modifié"
changeH2.style.color = "red"
changeH2.setAttribute("class", "bg-primary")
console.log(changeH2);


let sections = document.querySelectorAll("section")
let btn = document.querySelectorAll("button")
console.log(btn);
let nom = document.getElementsByClassName("inconnu")[0]
console.log(nom);
let input = document.querySelectorAll("input")[0]

btn[7].addEventListener("click", () => {
    nom.innerText = `Welcome ${input.value}`
    input.value = ""
})

let blue = document.getElementsByClassName("blue")
let red = document.getElementsByClassName("red")
let counter = document.getElementById("counter")
let click = 0
red[0].style.display = "block"
btn[8].addEventListener("click", () => {
    if (red[0].style.display === "block") {
        red[0].style.display = "none"
        red[1].style.display = "block"
        click++
        counter.innerText = `Nombre de click : ${click}`
    } else {
        red[0].style.display = "block"
        red[1].style.display = "none"
        click++
        counter.innerText = `Nombre de click : ${click}`
    }
})


let images = document.getElementById("images")
btn[9].addEventListener("click", () => {
    let oeuf = document.createElement("IMG")
    oeuf.setAttribute("src", "../../public/img/egg.png")
    oeuf.setAttribute("alt", "egg")
    oeuf.style.height = "150px"
    oeuf.style.width = "100px"
    images.appendChild(oeuf)
})

btn[0].addEventListener("click", () => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none"
        sections[0].style.display = "block"
    }
})
btn[1].addEventListener("click", () => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none"
        sections[1].style.display = "block"
    }
})
btn[2].addEventListener("click", () => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none"
        sections[2].style.display = "block"
    }
})
btn[3].addEventListener("click", () => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none"
        sections[3].style.display = "block"
    }
})
btn[4].addEventListener("click", () => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none"
        sections[4].style.display = "block"
    }
})
btn[5].addEventListener("click", () => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none"
        sections[5].style.display = "block"
    }
})
btn[6].addEventListener("click", () => {
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.display = "none"
        sections[6].style.display = "block"
    }
})

let eq1 = document.getElementById("result")

btn[10].addEventListener("click", () => {
    let num1 = document.getElementById("numero1")
    let num2 = document.getElementById("numero2")
    eq1.innerText = Number(num1.value) + Number(num2.value)
})

let chiffres = document.getElementById("btn-target")
let numeros = document.querySelectorAll(".num")
let calcule = document.getElementById("result2")
for (let i = 0; i < numeros.length; i++) {
    numeros[i].value = i + 1;
    numeros[9].value = 0;
    numeros[i].addEventListener("click", () => {
        chiffres.value += numeros[i].value;
    })
}

let operateur = document.getElementById("ops")
let ligne = document.getElementById("line")

btn[14].addEventListener("click", ()=> {
    operateur.innerText = "+"
    result2 = Number(chiffres.value)
    ligne.innerText = `${result2} + `
    chiffres.value = ""
})
btn[18].addEventListener("click", ()=> {
    operateur.innerText = "-"
    result2 = Number(chiffres.value)
    ligne.innerText = `${result2} - `
    chiffres.value = ""
})
btn[22].addEventListener("click", ()=> {
    operateur.innerText = "*"
    result2 = Number(chiffres.value)
    ligne.innerText = `${result2} * `
    chiffres.value = ""
})
btn[26].addEventListener("click", ()=> {
    operateur.innerText = "/"
    result2 = Number(chiffres.value)
    ligne.innerText = `${result2} / `
    chiffres.value = ""
})

btn[25].addEventListener("click", () => {
    switch (operateur.innerText) {
        case "+":
            ligne.innerText = Number(result2)  + Number(chiffres.value)
            break;
        case "-":
            ligne.innerText = Number(result2)  - Number(chiffres.value)
            break;
        case "*":
            ligne.innerText = Number(result2)  * Number(chiffres.value)
            break;
        case "/":
            ligne.innerText = Number(result2)  / Number(chiffres.value)
            break;
    }
})

btn[23].addEventListener("click", () => {
    ligne.innerText = ""
    chiffres.value = ""
})


var liste = document.getElementById("list")
let aFaire = document.getElementById("ToDo")

btn[27].style.border = "2px solid white"
btn[28].style.border = "2px solid white"
btn[29].style.border = "2px solid white"

btn[27].style.borderRadius = "4px"
btn[28].style.borderRadius = "4px"
btn[29].style.borderRadius = "4px"

btn[27].style.padding = "5px"
btn[28].style.padding = "5px"
btn[29].style.padding = "5px"


aFaire.addEventListener("keypress", function(event){
    if (event.keyCode === 13){ 
        // Creation div, contiendra li et bouton
        var listItem = document.createElement("div")
            listItem.style.backgroundColor ="white"
            listItem.style.width = "800px"
            listItem.style.display ="flex"
            listItem.style.justifyContent = "space-between"
            listItem.style.alignItems = "center"
            listItem.style.marginTop = "15px"
            // Creation div pour les trois bouton
        let collect = document.createElement("div")
            collect.style.display ="flex"
            collect.style.flexDirection = "row"
            collect.style.marginTop = "10px"
            // bouton vert
        let checked = document.createElement("button")
            checked.style.backgroundColor = "green"
            checked.style.padding = "5px"
            checked.style.marginRight = "3px"
            checked.style.borderRadius = "3px"
            // bouton edit
        let edited = document.createElement("button")
            edited.style.backgroundColor = "yellow"
            edited.style.padding = "5px"
            edited.style.marginRight = "3px"
            edited.style.borderRadius = "3px" 
            // bouton effacer
        let erased = document.createElement("button")
            erased.style.backgroundColor = "red"
            erased.style.padding = "5px"
            erased.style.borderRadius = "3px"
            // icone check
            var check = document.createElement("i")
            check.setAttribute("class", "fas fa-check")
            check.style.color = "white"
            check.style.margin = "3px"
            checked.appendChild(check)
            // icone edit
        var edit = document.createElement("i")
            edit.setAttribute("class", "fas fa-edit")
            edit.style.color = "black"
            edit.style.margin = "3px"
            edited.appendChild(edit)
            // icone delete
        var efface = document.createElement("i")
            efface.setAttribute("class", "far fa-trash-alt")
            efface.style.backgroundColor = "red"
            efface.style.color = "white"
            efface.style.margin = "3px"
            erased.appendChild(efface)
            // creation li
        var li = document.createElement("li")
            li.innerText = aFaire.value
            li.style.marginLeft = "5px"
            li.style.listStyle = "none"
        collect.append(checked, edited, erased)
        listItem.append(li, collect)
        list.appendChild(listItem)
        aFaire.value = ""
        // fonction check
        checked.addEventListener("click", () => {
            if (listItem.style.backgroundColor != "green") {
                listItem.style.backgroundColor = "green"
            } else {
                listItem.style.backgroundColor = "white"
            }
        })
        // fonction changer li
        edited.addEventListener("click", () => {
            li.style.display = "none"
            let valueChange = document.createElement("input")
            valueChange.setAttribute("type", "text")
            valueChange.style.border = "2px solid black"
            listItem.appendChild(valueChange)
            collect.style.display = "none"
            let saveChange = document.createElement("button")
            let saveIcon = document.createElement("i")
                saveIcon.setAttribute("class", "far fa-save")
                saveChange.style.backgroundColor = "yellow"
                saveChange.style.padding = "10px"
                saveChange.style.marginTop = "15px"
                saveChange.style.borderRadius = "5px"
                saveChange.appendChild(saveIcon)
                listItem.style.justifyContent = "space-between"
            listItem.appendChild(saveChange)
            saveChange.addEventListener("click", () => {
                li.innerText = valueChange.value
                saveChange.remove()
                collect.style.display = "block"
                li.style.display = "block"
                valueChange.remove()
            })
        }) 
        // fonction effacer
        erased.addEventListener("click", ()=> {
            liste.removeChild(listItem)
        })
        // fonction voir tout les li
        btn[27].addEventListener("click", () => {
            listItem.style.display = "flex"
        })
        // fonction voire seulement completer
        btn[28].addEventListener("click", () => {
            if (listItem.style.backgroundColor != "green") {
                listItem.style.display = "none"
            } else {
                listItem.style.display = "flex"
            }
        })
        // fonction voire seulement encore A faire
        btn[29].addEventListener("click", () => {
            if (listItem.style.backgroundColor == "green") {
                listItem.style.display = "none"
            } else {
                listItem.style.display = "flex"
            }
        })
    }
})