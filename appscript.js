const scriptURL = 'https://script.google.com/macros/s/AKfycbyBWJZEskPie6CdXBYNeiXj5tS7rSZvTPdveI8NOVtvRveM0afKcLz0-AUy0BXVzSL9/exec'

const form = document.forms['MDC_Website_Data']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
