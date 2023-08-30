const scriptURL = 'https://script.google.com/macros/s/AKfycbzRoGtvyB-aa6FO2LuWcDEaLMc3uJaPbDMXpuTRP6AxRRa_T2IKZLTP34sNsWCJ6qXP/exec'

const form = document.forms['MDC_Website_Data']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
