const inputCheck = document.querySelector('#dark-mode')
const element = document.querySelector('body')
inputCheck.addEventListener('click',() => {
    const mode = inputCheck.checked ? 'dark': 'light'
    element.setAttribute("data-bs-theme", mode)
})
function atualizarData() {
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()
    let dataFormatada = `${dia}/${mes}/${ano}`
    document.getElementById('dataAtual').innerHTML = `&copy; Desenvolvido por Lucas Soares ${dataFormatada}`
}
window.onload = function() {
    atualizarData()
}

//animações
window.revelar = ScrollReveal({
    reset:true
}
)
// topo do site
revelar.reveal('.animate-title1',{
    durantion: 2000,
    distance: '90px',
    deley: 500,
    origin: 'left'
})

revelar.reveal('.animate-paragraph1',{
    durantion: 2000,
    distance: '90px',
    deley: 1000,
    origin: 'left'
})

revelar.reveal('.animate-main-btn',{
    durantion: 2000,
    distance: '90px',
    deley: 1500,
    origin: 'left'
})

// serviços
revelar.reveal('.animate-servicos',{
    durantion: 2000,
    distance: '90px'
})

// produtos
revelar.reveal('.animate-products',{
    durantion: 2000,
    distance: '90px'
})
// portas abertas
revelar.reveal('.animate-portas-abertas',{
    durantion: 2000,
    distance: '90px'
})

// sobre
revelar.reveal('.animate-sobre',{
    durantion: 2000,
    distance: '90px'
})