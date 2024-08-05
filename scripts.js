const USD = 5.73
const EUR = 6.27
const GBP = 7.30

const form = document.querySelector("form")
const amount = document.querySelector("#amount")
const currency = document.querySelector("#currency")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")


const regex_hasCharacters = /\D+/g

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  amount.value = amount.value.replace(regex_hasCharacters, "")
})


// Capturando evento de submit no formulário
form.onsubmit = (e) => {
  e.preventDefault()

  switch (currency.value) {
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
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`
    let total = amount * price

    // Verifica se o resultado não é um numero
    if(isNaN(total)){
      return alert("Digite o valor corretamente para conversão.")
    }

    // Formatar o valor total.
    total = formatCurrencyBRL(total).replace("R$", "")
    result.textContent = `${total} Reais`
    footer.classList.add("show-result");

  } catch (e) {
    console.log(e);
    footer.classList.remove("show-result")
    alert("Não foi possível realizar a conversão. Tente novamente mais tarde!")
  }
}

function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })
}