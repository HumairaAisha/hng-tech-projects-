const form = document.querySelectorAll("form")
const sucessMsg = document.getElementById("sucsess-msg")
const nameError = document.getElementById('nameError')
const emailError = document.getElementById("emailError")
const subjectError = document.getElementById("subjectError")
const messageError = document.getElementById('messageError')


function validate(name, email, subject, message) {
   nameError.textContent = "";
   emailError.textContent = "";
   subjectError.textContent = "";
   messageError.textContent = "";

   let valid = true
   if (!name) {
      nameError.textContent = 'Name is required'
      valid = false
   }
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if (!emailPattern.test(email)) {
      emailError.textContent = 'Email must be valid (name@example.com)'
      valid = false
   }
   if (!subject) {
      subjectError.textContent = 'subject is required'
      valid = false
      
   }
   if(!message) {
     messageError.textContent = 'message should be atleast 10 characters' 
   }
   return valid
}
form.addEventListener('submit' ,function (event) {
   event.preventDefault()
   const name = document.getElementById('name').value
   const email = document.getElementById('email').value
   const subject = document.getElementById('subject').value
   const message = document.getElementById('message').value
   const isValid = validate(name, email, subject, message)
   if (isValid) {
      sucessMsg.textContent = 'Your message was submit successfully'
      form.reset()
   } else {
      sucessMsg.textContent = '';
   }
})