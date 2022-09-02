const name = document.getElementById('user')
const password = document.getElementById('password')
const email = document.getElementById('email')
const form = document.getElementById('Form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters')
}

    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
})

