const amount = document.querySelector("#amount");
const regex_hasCharacters = /\D+/g

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
  amount.value = amount.value.replace(regex_hasCharacters, "")
})