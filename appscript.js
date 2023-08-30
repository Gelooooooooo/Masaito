const scriptURL = 'https://script.google.com/macros/s/AKfycbx-RbLk3hbFq6gdQRarufPg_p76gwjGI7K6FW8MY0SOQJWCHgy2DWgSZuk22yKrWlMX/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
