let idade = 10;
console.log(idade);
if (idade > 5) {
    console.log("Parabéns! Você é maior de 5 anos");
}

let tagP = document.createElement("p");
tagP.innerHTML = "minha idade é " + idade;
console.log(document.getElementsByTagName("h1")[1])
console.log(document.querySelector("h1"))
console.log(document.querySelectorAll("h1"))