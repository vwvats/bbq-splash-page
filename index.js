let bbqForm = document.getElementById("bbq-form")
bbqForm.addEventListener("submit", event => {
  event.preventDefault()

let ourformData = new FormData(event.target)

let firstName = ourformData.get("name")

let submissionMessage = `
  <h2>Congratulations, ${firstName}!</h2>
  <h3>You're on your way to becoming a BBQ Master!</h3>
  <p class="fine-print">We'll never share your information without your permission</p>
  `
  let mainContent = document.getElementById("main")
  mainContent.innerHTML = submissionMessage
});