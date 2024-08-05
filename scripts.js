const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")

const regex_hasCharacters = /\D+/g

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  amount.value = amount.value.replace(regex_hasCharacters, "")
})


// Capturando evento de submit no formulário
form.onsubmit = (e) => {
  e.preventDefault()

  console.log(currency.value)
}