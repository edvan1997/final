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
let notifica = document.querySelector('.bloco-not')
let fecha = document.querySelector('.fecha')

sino.addEventListener('click', function(){
    notifica.style.display = 'block'
})
fecha.addEventListener('click', function(){
    notifica.style.display = 'none'
})


let perfil = document.querySelector('.foto-perfil')
let configurar = document.querySelector('.configurar')
let sair = document.querySelector('.sair')

perfil.addEventListener('click', function(){
    configurar.style.display = 'block'
})
sair.addEventListener('click', function(){
    configurar.style.display = 'none'
})