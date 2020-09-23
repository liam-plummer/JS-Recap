
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
let calcule = document.getElementById("reslut2")
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

