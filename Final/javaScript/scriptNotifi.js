let friends = document.querySelector('.friends')
let user = document.querySelector('.user-not')
let fechar = document.querySelector('.fa-times')

user.addEventListener('click', function(){
    friends.style.display = 'block'
})
fechar.addEventListener('click', function(){
    friends.style.display = 'none'
})

let sino = document.querySelector('.sino')
let chat = document.querySelector('.chat-geral')
let fecha = document.querySelector('.fecha')

sino.addEventListener('click', function(){
    chat.style.display = 'block'
})
fecha.addEventListener('click', function(){
    chat.style.display = 'none'
})
