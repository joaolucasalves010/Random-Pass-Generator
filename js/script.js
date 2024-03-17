// Seleção de elementos
const buttonGenerate = document.querySelector("#generate-pass")
const inputNumberValue = document.querySelector("#inputValue")
const mensagemErro = document.querySelector("#erro span")
const divErro = document.querySelector("#erro")
const cleanButton = document.querySelector("#clear-pass")
const containerPass = document.querySelector("#password-container")
const showPass = document.querySelector("#password-container span")
const copyButton = document.querySelector("#password-container button")
const bodyElement = document.querySelector("body")
// Função geradora de senha
function generatePass(number) {
  let senha = ""
  const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
  for (let i = 1; i <= number; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    senha = senha + str.charAt(char)
  }

  return senha
}

function toggleMode() {
  bodyElement.classList.toggle("light")
}

// Eventos
buttonGenerate.addEventListener("click", () => {
  const numberValue = inputNumberValue.value
  if (isNaN(inputNumberValue.value)) {
    divErro.classList.remove("hide")
    mensagemErro.classList.add("error")
    mensagemErro.innerText = "Digite apenas numeros!"
  } else if (!inputNumberValue.value) {
    divErro.classList.remove("hide")
    mensagemErro.classList.add("error")
    mensagemErro.innerText = "Digite o número acima!"
  } else if (numberValue > 16) {
    divErro.classList.remove("hide")
    mensagemErro.classList.add("error")
    mensagemErro.innerText = "O número nao pode ser maior que 16!"
  } else if (numberValue < 8) {
    divErro.classList.remove("hide")
    mensagemErro.classList.add("error")
    mensagemErro.innerText = "O número nao pode ser menor que 8!"
  } else {
    divErro.classList.add("hide")
    const senha = generatePass(numberValue)
    containerPass.classList.remove("hide")
    showPass.innerText = senha
    buttonGenerate.disabled = true
  }
})

cleanButton.addEventListener("click", () => {
  divErro.classList.add("hide")
  containerPass.classList.add("hide")
  buttonGenerate.disabled = false
})

copyButton.addEventListener("click", () => {
  const passwordText = showPass.textContent

  const tempInput = document.createElement("textarea")
  tempInput.value = passwordText
  document.body.appendChild(tempInput)

  // Seleciona o texto
  tempInput.select()
  tempInput.setSelectionRange(0, 99999) // Para dispositivos móveis

  // Copia o texto para a área de transferência
  document.execCommand("copy")

  // Remove o elemento temporário
  document.body.removeChild(tempInput)

  // Exibe uma mensagem ou realiza outra ação, se desejar
  console.log("Senha copiada para a área de transferência!")
})
