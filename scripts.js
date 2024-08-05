const USD = 4.87
const EUR = 5.32
const GBP = 6.08

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

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£")
      break;
    default:
      alert("Tipo de moeda inválido!");
  }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol){
  const convert = amount * price
  console.log(convert)
}